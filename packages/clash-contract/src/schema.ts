export interface paths {
    "/clans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search clans
         * @description Search clans by name and/or filtering parameters. At least one filtering parameter is required (`name`, `warFrequency`, `locationId`, `minMembers`, `maxMembers`, `minClanPoints`, `minClanLevel`, or `labelIds`).
         */
        get: operations["clans.search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clans/{clanTag}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get clan information
         * @description Get information about a single clan by clan tag. Mock variants: `#2PP` (full clan with Capital districts), `#2PPP` (no-Capital clan with private war log).
         */
        get: operations["clans.profile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clans/{clanTag}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List clan members
         * @description List members of a clan.
         */
        get: operations["clans.members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clans/{clanTag}/currentwar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve current clan war
         * @description Retrieve information about a clan's current clan war. Mock variants: `#2PP` (inWar), `#2PPP` (preparation), `#2PPPP` (warEnded), `#2PPPPP` (notInWar), `#2PPPPPP` (403 private war log).
         */
        get: operations["clans.war"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clans/{clanTag}/warlog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve clan war log
         * @description Retrieve a clan's clan war log (includes both classic wars and CWL season summary rows). Mock variants: `#2PP` (war log), `#2PPP` (403 private war log).
         */
        get: operations["clans.warlog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clans/{clanTag}/currentwar/leaguegroup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve current CWL group
         * @description Retrieve information about a clan's current Clan War League group. Mock variants: `#2PP` (inWar), `#2PPP` (ended), `#2PPPP` (404 not found).
         */
        get: operations["clans.cwl"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clanwarleagues/wars/{warTag}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve CWL war
         * @description Retrieve information about an individual Clan War League war. Mock variants: `#2PP` (inWar), `#2PPP` (preparation), `#2PPPP` (warEnded).
         */
        get: operations["clans.leagueWar"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clans/{clanTag}/capitalraidseasons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve clan capital raid seasons
         * @description Retrieve a clan's capital raid seasons. Ongoing seasons include `members` and district `attacks`; ended seasons omit both.
         */
        get: operations["clans.raids"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/players/{playerTag}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get player information
         * @description Get information about a single player by player tag. Mock variants: `#2PP` (found), `#2PPP` (404 not found).
         */
        get: operations["players.profile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/players/{playerTag}/battlelog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get player battle log
         * @description Get recent battle log entries for a player.
         */
        get: operations["players.battles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/players/{playerTag}/leaguehistory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get player league history
         * @description Get historical ranked league season results for a player.
         */
        get: operations["players.history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/players/{playerTag}/verifytoken": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Verify player API token
         * @description Verify an in-game API token for a player account. Mock behavior: `#2PP` with `{"token":"TOKEN"}` returns `ok` (other tokens return `invalid`); `#2PPP` returns 404.
         */
        post: operations["players.verify"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/leaguetiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List league tiers
         * @description List ranked league tiers.
         */
        get: operations["leagues.tiers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/leaguetiers/{leagueTierId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get league tier information
         * @description Get information about a specific league tier.
         */
        get: operations["leagues.tier"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/capitalleagues": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List capital leagues
         * @description List Clan Capital leagues.
         */
        get: operations["leagues.capitals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/capitalleagues/{leagueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get capital league information
         * @description Get information about a specific Clan Capital league.
         */
        get: operations["leagues.capital"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builderbaseleagues": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Builder Base leagues
         * @description List Builder Base leagues.
         */
        get: operations["leagues.builders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builderbaseleagues/{leagueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Builder Base league information
         * @description Get information about a specific Builder Base league.
         */
        get: operations["leagues.builder"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/warleagues": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List war leagues
         * @description List Clan War Leagues.
         */
        get: operations["leagues.wars"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/warleagues/{leagueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get war league information
         * @description Get information about a specific Clan War League.
         */
        get: operations["leagues.war"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/leagues/{leagueId}/seasons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get league seasons
         * @description Get available seasons for a league (e.g. Legend League `29000022`).
         */
        get: operations["leagues.seasons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/leagues/{leagueId}/seasons/{seasonId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get league season rankings
         * @description Get player rankings for a specific league season. On the live Supercell API, `limit` must be between 100 and 25,000 when specified.
         */
        get: operations["leagues.season"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/leaguegroup/{leagueGroupTag}/{leagueSeasonId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get ranked league group
         * @description Get members and battle logs for a ranked league group. Mock variants (with `playerTag=#2PP`): `#2YYCYCC`/`1773032400` (current), `#2PGCG0J`/`1772427600` (previous). Note: upstream intermittently returns HTTP 500 `unknownException` for older groups.
         */
        get: operations["leagues.group"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/leagues": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List legacy leagues
         * @deprecated
         * @description Deprecated: Supercell replaced Home Village trophy leagues with ranked league tiers (`/leaguetiers`), though this endpoint still returns HTTP 200 with the 23 legacy leagues on live servers.
         */
        get: operations["leagues.legacyList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/leagues/{leagueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get legacy league information
         * @deprecated
         * @description Deprecated: Supercell replaced Home Village trophy leagues with ranked league tiers (`/leaguetiers/{leagueTierId}`), though this endpoint still returns HTTP 200 on live servers (e.g. `29000022` for Legend League).
         */
        get: operations["leagues.legacy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List locations
         * @description List available leaderboard locations.
         */
        get: operations["locations.list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get location information
         * @description Get information about a specific location. Unknown location IDs return HTTP 400 (`badRequest`).
         */
        get: operations["locations.item"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/rankings/clans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get clan rankings for a location
         * @description Get Home Village clan rankings for a specific location or `"global"`. Non-country region IDs return an empty list.
         */
        get: operations["locations.clans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/rankings/players": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get player rankings for a location
         * @description Get Home Village player rankings for a specific location or `"global"`. Non-country region IDs return an empty list.
         */
        get: operations["locations.players"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/rankings/players-builder-base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Builder Base player rankings for a location
         * @description Get Builder Base player rankings for a specific location or `"global"`. Non-country region IDs return an empty list.
         */
        get: operations["locations.builders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/rankings/clans-builder-base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Builder Base clan rankings for a location
         * @description Get Builder Base clan rankings for a specific location or `"global"`. Non-country region IDs return an empty list.
         */
        get: operations["locations.builderClans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/rankings/capitals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get clan capital rankings for a location
         * @description Get Clan Capital rankings for a specific location or `"global"`. Non-country region IDs return an empty list.
         */
        get: operations["locations.capitals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/labels/players": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List player labels
         * @description List available player labels.
         */
        get: operations["labels.players"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/labels/clans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List clan labels
         * @description List available clan labels.
         */
        get: operations["labels.clans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/goldpass/seasons/current": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get current Gold Pass season
         * @description Get start and end times for the current Gold Pass season.
         */
        get: operations["goldpass.current"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ClientErrorResponse: {
            message?: string;
            /** @description Machine-readable error reason (e.g. badRequest, notFound, accessDenied, accessDenied.invalidIp, tooManyRequests, inMaintenance, unknownException). */
            reason: string;
        };
        GoldPassSeason: {
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            endTime: string;
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            startTime: string;
        };
        LabelListResponse: {
            items: components["schemas"]["Label"][];
            paging: components["schemas"]["Paging"];
        };
        Paging: {
            cursors: components["schemas"]["CursorPaging"];
        };
        CursorPaging: {
            /** @description Cursor for the next page. */
            after?: string;
            /** @description Cursor for the previous page. */
            before?: string;
        };
        Label: {
            iconUrls: components["schemas"]["LabelIconUrls"];
            id: number;
            name: string;
        };
        LabelIconUrls: {
            /**
             * Format: uri
             * @description 128x128 label icon PNG URL.
             */
            medium: string;
            /**
             * Format: uri
             * @description 64x64 label icon PNG URL.
             */
            small: string;
        };
        ClanCapitalRankingListResponse: {
            items: components["schemas"]["ClanCapitalRanking"][];
            paging: components["schemas"]["Paging"];
        };
        ClanCapitalRanking: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            clanCapitalPoints: number;
            clanLevel: number;
            /** @description Omitted on worldwide leaderboards for clans without a configured location. */
            location?: components["schemas"]["Location"];
            members: number;
            name: string;
            /** @description Previous leaderboard rank, or -1 when unavailable. */
            previousRank: number;
            rank: number;
            tag: string;
        };
        BadgeUrls: {
            /**
             * Format: uri
             * @description 512x512 clan badge PNG URL.
             */
            large: string;
            /**
             * Format: uri
             * @description 200x200 clan badge PNG URL.
             */
            medium: string;
            /**
             * Format: uri
             * @description 70x70 clan badge PNG URL.
             */
            small: string;
        };
        ClanBuilderBaseRankingListResponse: {
            items: components["schemas"]["ClanBuilderBaseRanking"][];
            paging: components["schemas"]["Paging"];
        };
        ClanBuilderBaseRanking: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            clanBuilderBasePoints: number;
            clanLevel: number;
            /** @description Omitted on worldwide leaderboards for clans without a configured location. */
            location?: components["schemas"]["Location"];
            members: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        };
        PlayerBuilderBaseRankingListResponse: {
            items: components["schemas"]["PlayerBuilderBaseRanking"][];
            paging: components["schemas"]["Paging"];
        };
        PlayerBuilderBaseRanking: {
            builderBaseLeague: components["schemas"]["BuilderBaseLeague"];
            builderBaseTrophies: number;
            clan?: components["schemas"]["ClanReference"];
            expLevel: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        };
        ClanReference: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            name: string;
            tag: string;
        };
        BuilderBaseLeague: {
            id: number;
            name: string;
        };
        PlayerRankingListResponse: {
            items: components["schemas"]["PlayerRanking"][];
            paging: components["schemas"]["Paging"];
        };
        PlayerRanking: {
            attackWins: number;
            clan?: components["schemas"]["ClanReference"];
            defenseWins: number;
            expLevel: number;
            /** @description Legacy pre-2025 league object (often Unranked id 29000000). Prefer leagueTier. */
            league: components["schemas"]["League"];
            leagueTier: components["schemas"]["LeagueTier"];
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
            trophies: number;
        };
        LeagueTierIconUrls: {
            /**
             * Format: uri
             * @description 326x326 league tier icon PNG URL.
             */
            large: string;
            /**
             * Format: uri
             * @description 125x125 league tier icon PNG URL.
             */
            small: string;
        };
        LeagueIconUrls: {
            /**
             * Format: uri
             * @description 288x288 legacy league icon PNG URL. Omitted for Unranked (id 29000000).
             */
            medium?: string;
            /**
             * Format: uri
             * @description 72x72 legacy league icon PNG URL.
             */
            small: string;
            /**
             * Format: uri
             * @description 36x36 legacy league icon PNG URL.
             */
            tiny: string;
        };
        ClanRankingListResponse: {
            items: components["schemas"]["ClanRanking"][];
            paging: components["schemas"]["Paging"];
        };
        ClanRanking: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            clanLevel: number;
            clanPoints: number;
            /** @description Omitted on worldwide leaderboards for clans without a configured location. */
            location?: components["schemas"]["Location"];
            members: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        };
        LocationListResponse: {
            items: components["schemas"]["Location"][];
            paging: components["schemas"]["Paging"];
        };
        LeagueListResponse: {
            items: components["schemas"]["League"][];
            paging: components["schemas"]["Paging"];
        };
        LeagueGroup: {
            attackLogs: components["schemas"]["LeagueBattleLogEntry"][];
            defenseLogs: components["schemas"]["LeagueBattleLogEntry"][];
            members: components["schemas"]["LeagueGroupMember"][];
        };
        LeagueGroupMember: {
            attackLoseCount: number;
            attackWinCount: number;
            /** @description Member clan name, or null when the player is clanless. */
            clanName: string | null;
            /** @description Member clan tag, or null when the player is clanless. */
            clanTag: string | null;
            defenseLoseCount: number;
            defenseWinCount: number;
            leagueTrophies: number;
            playerName: string;
            playerTag: string;
        };
        LeagueBattleLogEntry: {
            /**
             * Format: date-time
             * @description ISO-8601 UTC timestamp (unlike most other Clash API timestamps, which use compact YYYYMMDDTHHmmss.SSSZ).
             * @example 2026-10-17T09:24:48Z
             */
            creationTime: string;
            destructionPercentage: number;
            opponentName: string;
            opponentPlayerTag: string;
            stars: number;
            trophies: number;
        };
        PlayerSeasonRankingListResponse: {
            items: components["schemas"]["PlayerSeasonRanking"][];
            paging: components["schemas"]["Paging"];
        };
        PlayerSeasonRanking: {
            attackWins: number;
            clan?: components["schemas"]["ClanReference"];
            defenseWins: number;
            expLevel: number;
            leagueTier: components["schemas"]["LeagueTier"];
            name: string;
            rank: number;
            tag: string;
            trophies: number;
        };
        LeagueSeasonListResponse: {
            items: components["schemas"]["LeagueSeason"][];
            paging: components["schemas"]["Paging"];
        };
        LeagueSeason: {
            /** @description Season identifier: YYYY-MM (2015-07 to 2025-08), YYYY-MM-DD (2025-10-06 to 2026-04-20), or v2-YYYY-MM-DDTHH:MM:SSZ (2026-05-11 onward). */
            id: string;
        };
        WarLeague: {
            id: number;
            name: string;
        };
        WarLeagueListResponse: {
            items: components["schemas"]["WarLeague"][];
            paging: components["schemas"]["Paging"];
        };
        BuilderBaseLeagueListResponse: {
            items: components["schemas"]["BuilderBaseLeague"][];
            paging: components["schemas"]["Paging"];
        };
        CapitalLeague: {
            id: number;
            name: string;
        };
        CapitalLeagueListResponse: {
            items: components["schemas"]["CapitalLeague"][];
            paging: components["schemas"]["Paging"];
        };
        LeagueTierListResponse: {
            items: components["schemas"]["LeagueTier"][];
            paging: components["schemas"]["Paging"];
        };
        VerifyTokenResponse: {
            /** @enum {string} */
            status: "ok" | "invalid";
            tag: string;
            token: string;
        };
        VerifyTokenRequest: {
            /**
             * @description In-game API token to verify. Send literal "TOKEN" against the mock API for a valid response.
             * @example TOKEN
             */
            token: string;
        };
        LeagueHistoryResponse: {
            items: components["schemas"]["LeagueSeasonResult"][];
        };
        LeagueSeasonResult: {
            attackLosses: number;
            attackStars: number;
            attackWins: number;
            defenseLosses: number;
            defenseStars: number;
            defenseWins: number;
            /**
             * Format: int64
             * @description Unix epoch timestamp (seconds) identifying the ranked season.
             */
            leagueSeasonId: number;
            leagueTierId: number;
            leagueTrophies: number;
            maxBattles: number;
            placement: number;
        };
        BattleLogResponse: {
            items: components["schemas"]["BattleLogEntry"][];
        };
        BattleLogEntry: {
            /** @description Shareable army composition code, or null when unavailable on a battle log entry. */
            armyShareCode: string | null;
            attack: boolean;
            availableLoot: components["schemas"]["Resource"][];
            /** @description Battle duration in seconds. */
            battleTime: number;
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            battleTimestamp: string;
            /** @enum {string} */
            battleType: "ranked" | "legend" | "homeVillage";
            destructionPercentage: number;
            extraLootedResources: components["schemas"]["Resource"][];
            lootedResources: components["schemas"]["Resource"][];
            opponentName: string;
            opponentPlayerTag: string;
            opponentTownHallLevel: number;
            stars: number;
        };
        Resource: {
            /** Format: int64 */
            amount: number;
            /** @description Internal resource identifier (e.g. Gold, Elixir, DarkElixir, Gold2, CommonOre, CraftingResource1). Not a fixed enum. */
            name: string;
        };
        Player: {
            achievements: components["schemas"]["PlayerAchievementProgress"][];
            attackWins: number;
            bestBuilderBaseTrophies: number;
            bestTrophies: number;
            /** @description Omitted when the player has not unlocked Builder Base. */
            builderBaseLeague?: components["schemas"]["BuilderBaseLeague"];
            builderBaseTrophies: number;
            /** @description Omitted when the player has not unlocked Builder Base. */
            builderHallLevel?: number;
            clan?: components["schemas"]["PlayerClan"];
            clanCapitalContributions: number;
            /** @description Current ranked league group tag. May be placeholder "#0" (querying /leaguegroup/%230/... returns 404). Omitted when currentLeagueSeasonId is 0. */
            currentLeagueGroupTag?: string;
            /**
             * Format: int64
             * @description Current ranked league season epoch (seconds), or 0 when the player is not in a league group.
             */
            currentLeagueSeasonId: number;
            defenseWins: number;
            donations: number;
            donationsReceived: number;
            expLevel: number;
            heroEquipment: components["schemas"]["PlayerItemLevel"][];
            heroes: components["schemas"]["PlayerItemLevel"][];
            labels: components["schemas"]["Label"][];
            /** @description Legacy pre-2025 league object. Usually omitted; prefer leagueTier. */
            league?: components["schemas"]["League"];
            leagueTier: components["schemas"]["LeagueTier"];
            legendStatistics?: components["schemas"]["PlayerLegendStatistics"];
            name: string;
            playerHouse?: components["schemas"]["PlayerHouse"];
            /** @description Previous ranked league group tag. May be placeholder "#0" (querying /leaguegroup/%230/... returns 404). */
            previousLeagueGroupTag?: string;
            /**
             * Format: int64
             * @description Previous ranked league season epoch (seconds), or 0 when unavailable.
             */
            previousLeagueSeasonId: number;
            /**
             * @description Clan role. Note: "admin" represents Elder in-game, and "coLeader" is Co-Leader.
             * @enum {string}
             */
            role?: "member" | "admin" | "coLeader" | "leader";
            spells: components["schemas"]["PlayerItemLevel"][];
            tag: string;
            townHallLevel: number;
            /** @description Town Hall weapon level. Present for TH12-TH17; omitted for TH1-TH11 and TH18+. */
            townHallWeaponLevel?: number;
            troops: components["schemas"]["PlayerItemLevel"][];
            trophies: number;
            /**
             * @description Omitted when the player is not in a clan.
             * @enum {string}
             */
            warPreference?: "in" | "out";
            warStars: number;
        };
        PlayerItemLevel: {
            /** @description Equipped hero equipment. Present only on Home Village heroes. */
            equipment?: components["schemas"]["PlayerItemLevel"][];
            level: number;
            maxLevel: number;
            name: string;
            /** @description Emitted only when true on currently active super troops. */
            superTroopIsActive?: boolean;
            /** @enum {string} */
            village: "home" | "builderBase";
        };
        PlayerHouse: {
            elements: components["schemas"]["PlayerHouseElement"][];
        };
        PlayerHouseElement: {
            id: number;
            /**
             * @description Wire element slot type ("walls" and "decoration", not the official Swagger names FOOT/DECO).
             * @enum {string}
             */
            type: "ground" | "walls" | "roof" | "decoration";
        };
        PlayerLegendStatistics: {
            bestBuilderBaseSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"];
            bestSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"];
            currentSeason: components["schemas"]["LegendLeagueTournamentSeasonResult"];
            legendTrophies: number;
            previousSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"];
        };
        LegendLeagueTournamentSeasonResult: {
            /** @description Season identifier. Omitted on currentSeason. */
            id?: string;
            /** @description Season rank. Omitted on currentSeason when unranked. */
            rank?: number;
            trophies: number;
        };
        /** @description Omitted when the player is not in a clan. */
        PlayerClan: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            clanLevel: number;
            name: string;
            tag: string;
        };
        PlayerAchievementProgress: {
            /** @description Progress/completion text, or null for achievements that do not report completion info. */
            completionInfo: string | null;
            info: string;
            name: string;
            stars: number;
            target: number;
            /** Format: int64 */
            value: number;
            /** @enum {string} */
            village: "home" | "builderBase" | "clanCapital";
        };
        CapitalRaidSeasonsResponse: {
            items: components["schemas"]["ClanCapitalRaidSeason"][];
            paging: components["schemas"]["Paging"];
        };
        ClanCapitalRaidSeason: {
            attackLog: components["schemas"]["ClanCapitalRaidSeasonAttackLogEntry"][];
            capitalTotalLoot: number;
            defenseLog: components["schemas"]["ClanCapitalRaidSeasonDefenseLogEntry"][];
            defensiveReward: number;
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            endTime: string;
            enemyDistrictsDestroyed: number;
            /** @description Participating clan members who have made at least one attack. Present on ongoing raid seasons and omitted on ended seasons. */
            members?: components["schemas"]["ClanCapitalRaidSeasonMember"][];
            offensiveReward: number;
            raidsCompleted: number;
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            startTime: string;
            /** @enum {string} */
            state: "ongoing" | "ended";
            totalAttacks: number;
        };
        ClanCapitalRaidSeasonMember: {
            attackLimit: number;
            attacks: number;
            bonusAttackLimit: number;
            capitalResourcesLooted: number;
            name: string;
            tag: string;
        };
        ClanCapitalRaidSeasonDefenseLogEntry: {
            attackCount: number;
            attacker: components["schemas"]["ClanCapitalRaidSeasonClanInfo"];
            districtCount: number;
            districts: components["schemas"]["ClanCapitalRaidSeasonDistrict"][];
            districtsDestroyed: number;
        };
        ClanCapitalRaidSeasonDistrict: {
            attackCount: number;
            /** @description Individual attacks against this district. Included only for attacked districts in an ongoing raid season; omitted on ended seasons. */
            attacks?: components["schemas"]["ClanCapitalRaidSeasonAttack"][];
            destructionPercent: number;
            districtHallLevel: number;
            id: number;
            name: string;
            stars: number;
            totalLooted: number;
        };
        ClanCapitalRaidSeasonAttack: {
            attacker: components["schemas"]["ClanCapitalRaidSeasonAttacker"];
            destructionPercent: number;
            stars: number;
        };
        ClanCapitalRaidSeasonAttacker: {
            name: string;
            tag: string;
        };
        ClanCapitalRaidSeasonClanInfo: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            level: number;
            name: string;
            tag: string;
        };
        ClanCapitalRaidSeasonAttackLogEntry: {
            attackCount: number;
            defender: components["schemas"]["ClanCapitalRaidSeasonClanInfo"];
            districtCount: number;
            districts: components["schemas"]["ClanCapitalRaidSeasonDistrict"][];
            districtsDestroyed: number;
        };
        ClanWar: components["schemas"]["ActiveClanWar"] | components["schemas"]["NotInWar"];
        NotInWar: {
            clan: components["schemas"]["NotInWarClan"];
            /** @description Zeroed placeholder opponent object returned when not in war. */
            opponent: components["schemas"]["NotInWarClan"];
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "notInWar";
        };
        /** @description Zeroed placeholder clan object returned when not in war. */
        NotInWarClan: {
            attacks: number;
            badgeUrls: components["schemas"]["BadgeUrls"];
            clanLevel: number;
            destructionPercentage: number;
            stars: number;
        };
        ActiveClanWar: {
            /** @description Present on classic wars (typically 2); omitted on CWL wars (1 attack per member). */
            attacksPerMember?: number;
            /** @enum {string} */
            battleModifier?: "none" | "hardMode" | "minusOne" | "minusTwo" | "minusThree";
            clan: components["schemas"]["WarClan"];
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            endTime: string;
            opponent: components["schemas"]["WarClan"];
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            preparationStartTime: string;
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            startTime: string;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            state: "inWar" | "preparation" | "warEnded";
            teamSize: number;
            /**
             * @description Present on CWL war responses; omitted on classic wars.
             * @example 20261119T165155.000Z
             */
            warStartTime?: string;
        };
        WarClan: {
            attacks: number;
            badgeUrls: components["schemas"]["BadgeUrls"];
            clanLevel: number;
            destructionPercentage: number;
            members: components["schemas"]["ClanWarMember"][];
            name: string;
            stars: number;
            tag: string;
        };
        ClanWarMember: {
            /** @description Omitted until the member performs at least one attack. */
            attacks?: components["schemas"]["ClanWarAttack"][];
            /** @description Omitted when opponentAttacks is 0. */
            bestOpponentAttack?: components["schemas"]["ClanWarAttack"];
            mapPosition: number;
            name: string;
            opponentAttacks: number;
            tag: string;
            /** @description Member Town Hall level. Note lowercase "h" on the wire (unlike townHallLevel elsewhere). */
            townhallLevel: number;
        };
        ClanWarAttack: {
            attackerTag: string;
            defenderTag: string;
            destructionPercentage: number;
            /** @description Attack duration in seconds. */
            duration: number;
            order: number;
            stars: number;
        };
        ClanWarLeagueGroup: {
            clans?: components["schemas"]["ClanWarLeagueClan"][];
            rounds?: components["schemas"]["ClanWarLeagueRound"][];
            season?: string;
            /** @enum {string} */
            state: "notInWar" | "preparation" | "inWar" | "ended";
        };
        ClanWarLeagueRound: {
            /** @description War tags for this round. Unmatched future rounds use placeholder "#0". */
            warTags?: string[];
        };
        ClanWarLeagueClan: {
            badgeUrls?: components["schemas"]["BadgeUrls"];
            clanLevel: number;
            members?: components["schemas"]["ClanWarLeagueClanMember"][];
            name: string;
            tag: string;
        };
        ClanWarLeagueClanMember: {
            name: string;
            tag: string;
            townHallLevel: number;
        };
        ClanWarLogResponse: {
            items: components["schemas"]["ClanWarLogEntry"][];
            paging: components["schemas"]["Paging"];
        };
        ClanWarLogEntry: {
            attacksPerMember: number;
            /** @enum {string} */
            battleModifier: "none" | "hardMode" | "minusOne" | "minusTwo" | "minusThree";
            clan: components["schemas"]["WarLogClan"];
            /**
             * @description UTC timestamp in YYYYMMDDTHHmmss.SSSZ format.
             * @example 20261119T165155.000Z
             */
            endTime: string;
            opponent: components["schemas"]["WarLogOpponent"];
            /** @description War outcome. Often null on CWL season summary rows, though some CWL rows carry win/tie; check for missing opponent.tag to reliably detect CWL rows. */
            result: ("win" | "lose" | "tie") | null;
            teamSize: number;
        };
        WarLogOpponent: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            clanLevel: number;
            destructionPercentage: number;
            /** @description Omitted on CWL season summary entries in the war log. */
            name?: string;
            stars: number;
            /** @description Omitted on CWL season summary entries in the war log. Detecting missing opponent.tag reliably identifies CWL summary rows. */
            tag?: string;
        };
        WarLogClan: {
            attacks: number;
            badgeUrls: components["schemas"]["BadgeUrls"];
            clanLevel: number;
            /** @description Average destruction percentage (0-100) for classic wars, or the cumulative sum across all CWL rounds (can exceed 100) on CWL summary entries. */
            destructionPercentage: number;
            expEarned: number;
            name: string;
            stars: number;
            tag: string;
        };
        ClanMembersResponse: {
            items: components["schemas"]["ClanMember"][];
            paging: components["schemas"]["Paging"];
        };
        ClanMember: {
            builderBaseLeague: components["schemas"]["BuilderBaseLeague"];
            builderBaseTrophies: number;
            clanRank: number;
            donations: number;
            donationsReceived: number;
            expLevel: number;
            league: components["schemas"]["League"];
            leagueTier: components["schemas"]["LeagueTier"];
            name: string;
            playerHouse?: components["schemas"]["PlayerHouse"];
            /** @description Previous clan rank, or 0 for newly joined members. */
            previousClanRank: number;
            /**
             * @description Clan role. Note: "admin" represents Elder in-game, and "coLeader" is Co-Leader.
             * @enum {string}
             */
            role: "member" | "admin" | "coLeader" | "leader";
            tag: string;
            townHallLevel: number;
            trophies: number;
        };
        /** @description Legacy pre-2025 league object (often Unranked id 29000000). Prefer leagueTier for current ranked leagues. */
        League: {
            iconUrls: components["schemas"]["LeagueIconUrls"];
            id: number;
            name: string;
        };
        Clan: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            capitalLeague: components["schemas"]["CapitalLeague"];
            chatLanguage?: components["schemas"]["Language"];
            clanBuilderBasePoints: number;
            clanCapital: components["schemas"]["ClanCapital"];
            clanCapitalPoints: number;
            clanLevel: number;
            clanPoints: number;
            description: string;
            isFamilyFriendly: boolean;
            isWarLogPublic: boolean;
            labels: components["schemas"]["Label"][];
            location?: components["schemas"]["Location"];
            memberList: components["schemas"]["ClanMember"][];
            members: number;
            name: string;
            requiredBuilderBaseTrophies: number;
            requiredLeagueTier?: components["schemas"]["LeagueTier"];
            /** @description Minimum Town Hall level required to join. Note lowercase "h" in wire field name. */
            requiredTownhallLevel: number;
            requiredTrophies: number;
            tag: string;
            /** @enum {string} */
            type: "open" | "inviteOnly" | "closed";
            /** @enum {string} */
            warFrequency: "unknown" | "always" | "moreThanOncePerWeek" | "oncePerWeek" | "lessThanOncePerWeek" | "never";
            warLeague: components["schemas"]["WarLeague"];
            /** @description Omitted when isWarLogPublic is false. */
            warLosses?: number;
            /** @description Omitted when isWarLogPublic is false. */
            warTies?: number;
            warWinStreak: number;
            warWins: number;
        };
        ClanCapital: {
            /** @description Omitted for clans that have not unlocked Clan Capital. */
            capitalHallLevel?: number;
            /** Format: int64 */
            clanGoldSinkTotal: number;
            /** @description Omitted for clans that have not unlocked Clan Capital. */
            districts?: components["schemas"]["ClanCapitalDistrict"][];
        };
        ClanCapitalDistrict: {
            districtHallLevel: number;
            id: number;
            name: string;
        };
        ClanSearchResponse: {
            items: components["schemas"]["ClanSearchItem"][];
            paging: components["schemas"]["Paging"];
        };
        ClanSearchItem: {
            badgeUrls: components["schemas"]["BadgeUrls"];
            capitalLeague: components["schemas"]["CapitalLeague"];
            chatLanguage?: components["schemas"]["Language"];
            clanBuilderBasePoints: number;
            clanCapitalPoints: number;
            clanLevel: number;
            clanPoints: number;
            isFamilyFriendly: boolean;
            isWarLogPublic: boolean;
            labels: components["schemas"]["Label"][];
            location?: components["schemas"]["Location"];
            members: number;
            name: string;
            requiredBuilderBaseTrophies: number;
            requiredLeagueTier?: components["schemas"]["LeagueTier"];
            /** @description Minimum Town Hall level required to join. Note lowercase "h" in wire field name. */
            requiredTownhallLevel: number;
            requiredTrophies: number;
            tag: string;
            /** @enum {string} */
            type: "open" | "inviteOnly" | "closed";
            /** @enum {string} */
            warFrequency: "unknown" | "always" | "moreThanOncePerWeek" | "oncePerWeek" | "lessThanOncePerWeek" | "never";
            warLeague: components["schemas"]["WarLeague"];
            /** @description Omitted when isWarLogPublic is false. */
            warLosses?: number;
            /** @description Omitted when isWarLogPublic is false. */
            warTies?: number;
            warWinStreak: number;
            warWins: number;
        };
        /** @description Minimum ranked league tier required to join. Omitted when unset. */
        LeagueTier: {
            iconUrls: components["schemas"]["LeagueTierIconUrls"];
            id: number;
            name: string;
        };
        /** @description Omitted when the clan has not configured a location. */
        Location: {
            /** @description ISO 3166-1 alpha-2 country code. Present if and only if isCountry is true. */
            countryCode?: string;
            id: number;
            isCountry: boolean;
            name: string;
        };
        /** @description Omitted when the clan has not configured a chat language. */
        Language: {
            id: number;
            languageCode: string;
            name: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "clans.search": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
                name?: string;
                warFrequency?: "unknown" | "always" | "moreThanOncePerWeek" | "oncePerWeek" | "lessThanOncePerWeek" | "never" | "any";
                locationId?: number;
                minMembers?: number;
                maxMembers?: number;
                minClanPoints?: number;
                minClanLevel?: number;
                labelIds?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Matching clans. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanSearchResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "clans.profile": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clanTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan profile. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Clan"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "clans.members": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                clanTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan member list. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanMembersResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "clans.war": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clanTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Current clan war or not-in-war placeholder. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanWar"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "clans.warlog": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                clanTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan war log entries. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanWarLogResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "clans.cwl": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clanTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Current Clan War League group. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanWarLeagueGroup"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "clans.leagueWar": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                warTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Individual Clan War League war. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanWar"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "clans.raids": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                clanTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan Capital raid seasons. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CapitalRaidSeasonsResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "players.profile": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playerTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Player profile. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Player"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "players.battles": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playerTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Recent player battle log entries. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BattleLogResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "players.history": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playerTag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Historical ranked league season results. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueHistoryResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "players.verify": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playerTag: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VerifyTokenRequest"];
            };
        };
        responses: {
            /** @description API token verification result. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VerifyTokenResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.tiers": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ranked league tiers. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueTierListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.tier": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                leagueTierId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ranked league tier. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueTier"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.capitals": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan Capital leagues. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CapitalLeagueListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.capital": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                leagueId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan Capital league. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CapitalLeague"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.builders": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Builder Base leagues. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BuilderBaseLeagueListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.builder": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                leagueId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Builder Base league. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BuilderBaseLeague"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.wars": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan War Leagues. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WarLeagueListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.war": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                leagueId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan War League. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WarLeague"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.seasons": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                leagueId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Available league seasons. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueSeasonListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.season": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                leagueId: string;
                seasonId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Player rankings for the requested league season. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlayerSeasonRankingListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.group": {
        parameters: {
            query: {
                playerTag: string;
            };
            header?: never;
            path: {
                leagueGroupTag: string;
                leagueSeasonId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ranked league group members and battle logs. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueGroup"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.legacyList": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Legacy Home Village leagues (deprecated). */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "leagues.legacy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                leagueId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Legacy Home Village league (deprecated). */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["League"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "locations.list": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Available leaderboard locations. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LocationListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "locations.item": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Location details. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Location"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "locations.clans": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                locationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Home Village clan rankings. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanRankingListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "locations.players": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                locationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Home Village player rankings. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlayerRankingListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "locations.builders": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                locationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Builder Base player rankings. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlayerBuilderBaseRankingListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "locations.builderClans": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                locationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Builder Base clan rankings. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanBuilderBaseRankingListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "locations.capitals": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path: {
                locationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan Capital rankings. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanCapitalRankingListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "labels.players": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Player labels. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabelListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "labels.clans": {
        parameters: {
            query?: {
                limit?: number;
                after?: string;
                before?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Clan labels. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabelListResponse"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
    "goldpass.current": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Current Gold Pass season window. */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GoldPassSeason"];
                };
            };
            /** @description Bad request (`badRequest`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied (`accessDenied` for private war logs/tokens, or `accessDenied.invalidIp`). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found (`notFound`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled (`tooManyRequests`). See `Retry-After` header. */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error (`unknownException`). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable (`inMaintenance`). */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
        };
    };
}
