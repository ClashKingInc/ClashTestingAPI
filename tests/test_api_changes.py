import json
import unittest

from app.models import (
    BattleLogResponse,
    ClanWar,
    ClanWarLeagueGroup,
    ClanWarLogResponse,
    LeagueSeasonListResponse,
    Player,
    PlayerRankingListResponse,
)
from app.routes.common import read_wrapped_fixture
from app.routes.leagues import get_league_group
from app.routes.players import get_battle_log
from main import app


def fixture_body(path: str):
    return read_wrapped_fixture(path)["body"]


class ApiChangeTests(unittest.IsolatedAsyncioTestCase):
    async def test_battlelog_route_exposes_new_fields_and_legend_type(self):
        response = await get_battle_log("#2PP")
        body = json.loads(response.body)
        BattleLogResponse.model_validate(body)

        entries = body["items"]
        self.assertTrue(entries)
        self.assertIn("LEGEND", {entry["battleType"] for entry in entries})

        required_fields = {
            "battleType",
            "attack",
            "armyShareCode",
            "opponentPlayerTag",
            "opponentName",
            "opponentTownHallLevel",
            "stars",
            "destructionPercentage",
            "lootedResources",
            "extraLootedResources",
            "availableLoot",
            "battleTime",
            "battleTimestamp",
        }
        self.assertLessEqual(required_fields, set(entries[0]))

    async def test_league_group_route_accepts_string_path_season_ids(self):
        player = fixture_body("players/player/FOUND.json")
        response = await get_league_group(
            player["currentLeagueGroupTag"],
            str(player["currentLeagueSeasonId"]),
            player["tag"],
        )
        body = json.loads(response.body)
        self.assertEqual(response.status_code, 200)
        self.assertTrue(body["members"])

    def test_league_seasons_include_full_date_ids(self):
        body = fixture_body("leagues/LISTLEAGUESEASONS.json")
        LeagueSeasonListResponse.model_validate(body)
        season_ids = {item["id"] for item in body["items"]}
        self.assertIn("2026-06-02", season_ids)
        self.assertIn("2026-06-16", season_ids)

    def test_changed_fixtures_validate_against_models(self):
        BattleLogResponse.model_validate(fixture_body("players/battlelog/LOG.json"))
        Player.model_validate(fixture_body("players/player/FOUND.json"))
        PlayerRankingListResponse.model_validate(fixture_body("locations/rankings/players/COUNTRY.json"))
        PlayerRankingListResponse.model_validate(fixture_body("leagues/league-season/LEAGUESEASON.json"))
        LeagueSeasonListResponse.model_validate(fixture_body("leagues/LISTLEAGUESEASONS.json"))

        for path in ("clans/leaguegroup/INWAR.json", "clans/leaguegroup/ENDED.json"):
            body = fixture_body(path)
            ClanWarLeagueGroup.model_validate(body)
            self.assertRegex(body["season"], r"^\d{4}-\d{2}-\d{2}$")

    def test_openapi_contains_new_schema_fields(self):
        schemas = app.openapi()["components"]["schemas"]

        battlelog_props = schemas["BattleLogEntry"]["properties"]
        self.assertEqual(battlelog_props["battleType"]["enum"], ["HOME_VILLAGE", "RANKED", "LEGEND"])
        self.assertEqual(battlelog_props["opponentName"]["type"], "string")
        self.assertEqual(battlelog_props["opponentTownHallLevel"]["type"], "integer")
        self.assertEqual(battlelog_props["battleTime"]["type"], "integer")
        self.assertEqual(battlelog_props["battleTimestamp"]["type"], "string")

        attack_props = schemas["ClanWarAttack"]["properties"]
        self.assertEqual(attack_props["duration"]["type"], "integer")

        battle_modifier_schema = schemas["ClanWar"]["properties"]["battleModifier"]["anyOf"][0]
        self.assertEqual(
            battle_modifier_schema["enum"],
            ["NONE", "HARD_MODE", "MINUS_ONE", "MINUS_TWO", "MINUS_THREE"],
        )

        ranking_props = schemas["PlayerRanking"]["properties"]
        self.assertIn("leagueTier", ranking_props)

        season_props = schemas["LeagueSeason"]["properties"]
        self.assertEqual(season_props["id"]["type"], "string")

    def test_war_fixtures_use_current_battle_modifier_values(self):
        current_war = fixture_body("clans/currentwar/INWAR.json")
        ClanWar.model_validate(current_war)
        self.assertEqual(current_war["battleModifier"], "MINUS_ONE")

        war_log = fixture_body("clans/warlog/WARLOG.json")
        ClanWarLogResponse.model_validate(war_log)
        values = {entry["battleModifier"] for entry in war_log["items"]}
        self.assertIn("NONE", values)
        self.assertIn("MINUS_THREE", values)
