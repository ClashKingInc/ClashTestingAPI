import asyncio
import json
import unittest

from app.models import Clan
from app.routes.clans import get_clan
from app.routes.common import read_wrapped_fixture
from main import app


class ClanCapitalContractTests(unittest.TestCase):
    def test_normal_clan_capital_fixture_has_64_bit_gold_total_and_districts(self):
        body = read_wrapped_fixture("clans/clans/CLAN.json")["body"]

        clan = Clan.model_validate(body)

        self.assertEqual(clan.clanCapital.clanGoldSinkTotal, 9_876_543_210)
        self.assertGreater(len(clan.clanCapital.districts), 0)

    def test_no_districts_fixture_uses_minimal_clan_capital_object(self):
        body = read_wrapped_fixture("clans/clans/CLAN_NO_CAPITAL_DISTRICTS.json")["body"]

        clan = Clan.model_validate(body)

        self.assertEqual(body["clanCapital"], {"clanGoldSinkTotal": 9_876_543_210})
        self.assertEqual(clan.clanCapital.districts, [])

    def test_no_districts_variant_is_served_by_clan_route(self):
        response = asyncio.run(get_clan("#2PPP"))

        self.assertEqual(response.status_code, 200)
        body = json.loads(response.body)
        self.assertNotIn("districts", body["clanCapital"])
        self.assertEqual(body["clanCapital"]["clanGoldSinkTotal"], 9_876_543_210)

    def test_openapi_requires_clan_capital_and_64_bit_gold_total(self):
        app.openapi_schema = None
        schemas = app.openapi()["components"]["schemas"]
        clan_schema = schemas["Clan"]
        capital_schema = schemas["ClanCapital"]

        self.assertIn("clanCapital", clan_schema["required"])
        self.assertIn("clanGoldSinkTotal", capital_schema["required"])
        self.assertNotIn("districts", capital_schema["required"])
        self.assertEqual(capital_schema["properties"]["clanGoldSinkTotal"]["type"], "integer")
        self.assertEqual(capital_schema["properties"]["clanGoldSinkTotal"]["format"], "int64")


if __name__ == "__main__":
    unittest.main()
