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
         * @description Search all clans by name and/or filtering parameters.
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
         * @description Get information about a single clan by clan tag.
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
         * @description Retrieve information about a clan's current clan war.
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
         * @description Retrieve a clan's clan war log.
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
         * @description Retrieve information about a clan's current Clan War League group.
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
         * @description Retrieve information about an individual Clan War League war.
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
         * @description Retrieve a clan's capital raid seasons.
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
         * @description Get information about a single player by player tag.
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
         * @description Verify an in-game API token for a player account.
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
         * @description Get available seasons for a league (e.g. Legend League).
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
         * @description Get player rankings for a specific league season.
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
         * @description Get members and battle logs for a ranked league group.
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
         * @description Get information about a specific location.
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
         * @description Get Home Village clan rankings for a specific location.
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
         * @description Get Home Village player rankings for a specific location.
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
         * @description Get Builder Base player rankings for a specific location.
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
         * @description Get Builder Base clan rankings for a specific location.
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
         * @description Get Clan Capital rankings for a specific location.
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
         * @description Get information about the current Gold Pass season.
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
            detail?: Record<string, never> | null;
            message?: string | null;
            reason: string;
            type?: string | null;
        };
        GoldPassSeason: {
            endTime: string;
            startTime: string;
        };
        LabelListResponse: {
            items: components["schemas"]["Label"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        Paging: {
            cursors?: components["schemas"]["CursorPaging"];
        };
        CursorPaging: {
            after?: string | null;
            before?: string | null;
        };
        Label: {
            iconUrls?: components["schemas"]["IconUrls"] | null;
            id: number;
            name: string;
        };
        IconUrls: {
            large?: string | null;
            medium?: string | null;
            small?: string | null;
            tiny?: string | null;
        };
        ClanCapitalRankingListResponse: {
            items: components["schemas"]["ClanCapitalRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        ClanCapitalRanking: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanCapitalPoints: number;
            clanLevel: number;
            location?: components["schemas"]["Location"] | null;
            members: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        };
        Location: {
            countryCode?: string | null;
            id: number;
            isCountry: boolean;
            localizedName?: string | null;
            name: string;
        };
        BadgeUrls: {
            large?: string | null;
            medium?: string | null;
            small?: string | null;
        };
        ClanBuilderBaseRankingListResponse: {
            items: components["schemas"]["ClanBuilderBaseRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        ClanBuilderBaseRanking: {
            clanVersusPoints?: number | null;
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanBuilderBasePoints: number;
            clanLevel: number;
            clanPoints?: number | null;
            location?: components["schemas"]["Location"] | null;
            members: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        };
        PlayerBuilderBaseRankingListResponse: {
            items: components["schemas"]["PlayerBuilderBaseRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        PlayerBuilderBaseRanking: {
            versusTrophies?: number | null;
            versusBattleWins?: number | null;
            builderBaseLeague?: components["schemas"]["BuilderBaseLeague"];
            builderBaseTrophies: number;
            clan?: components["schemas"]["ClanReference"] | null;
            expLevel: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        };
        ClanReference: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel?: number | null;
            name: string;
            tag: string;
        };
        BuilderBaseLeague: {
            id: number;
            name: string;
        };
        PlayerRankingListResponse: {
            items: components["schemas"]["PlayerRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        PlayerRanking: {
            attackWins?: number | null;
            clan?: components["schemas"]["ClanReference"] | null;
            defenseWins?: number | null;
            expLevel: number;
            league?: components["schemas"]["League"] | null;
            leagueTier?: components["schemas"]["LeagueTier"] | null;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
            trophies: number;
        };
        LeagueTier: {
            iconUrls?: components["schemas"]["IconUrls"] | null;
            id: number;
            name: string;
        };
        League: {
            iconUrls?: components["schemas"]["IconUrls"] | null;
            id: number;
            name: string;
        };
        ClanRankingListResponse: {
            items: components["schemas"]["ClanRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        ClanRanking: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel: number;
            clanPoints: number;
            location?: components["schemas"]["Location"] | null;
            members: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        };
        LocationListResponse: {
            items: components["schemas"]["Location"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        LeagueGroup: {
            attackLogs?: components["schemas"]["LeagueBattleLogEntry"][];
            defenseLogs?: components["schemas"]["LeagueBattleLogEntry"][];
            members?: components["schemas"]["LeagueGroupMember"][];
        };
        LeagueGroupMember: {
            attackLoseCount: number;
            attackWinCount: number;
            clanName: string | null;
            clanTag: string | null;
            defenseLoseCount: number;
            defenseWinCount: number;
            leagueTrophies: number;
            playerName: string;
            playerTag: string;
        };
        LeagueBattleLogEntry: {
            creationTime: string;
            destructionPercentage: number;
            opponentName: string;
            opponentPlayerTag: string;
            stars: number;
            trophies: number;
        };
        PlayerSeasonRankingListResponse: {
            items: components["schemas"]["PlayerSeasonRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        PlayerSeasonRanking: {
            attackWins?: number | null;
            clan?: components["schemas"]["ClanReference"] | null;
            defenseWins?: number | null;
            expLevel: number;
            league?: components["schemas"]["League"] | null;
            leagueTier?: components["schemas"]["LeagueTier"] | null;
            name: string;
            previousRank?: number | null;
            rank: number;
            tag: string;
            trophies: number;
        };
        LeagueSeasonListResponse: {
            items: components["schemas"]["LeagueSeason"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        LeagueSeason: {
            id: string;
        };
        WarLeague: {
            id: number;
            name: string;
        };
        WarLeagueListResponse: {
            items: components["schemas"]["WarLeague"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        BuilderBaseLeagueListResponse: {
            items: components["schemas"]["BuilderBaseLeague"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        CapitalLeague: {
            id: number;
            name: string;
        };
        CapitalLeagueListResponse: {
            items: components["schemas"]["CapitalLeague"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        LeagueTierListResponse: {
            items: components["schemas"]["LeagueTier"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        VerifyTokenResponse: {
            status: string;
            tag: string;
            token: string;
        };
        VerifyTokenRequest: {
            token: string;
        };
        LeagueHistoryResponse: {
            items: components["schemas"]["LeagueSeasonResult"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        LeagueSeasonResult: {
            attackLosses: number;
            attackStars: number;
            attackWins: number;
            defenseLosses: number;
            defenseStars: number;
            defenseWins: number;
            leagueSeasonId: number | string;
            leagueTierId: number;
            leagueTrophies: number;
            maxBattles: number;
            placement: number;
        };
        BattleLogResponse: {
            items: components["schemas"]["BattleLogEntry"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        BattleLogEntry: {
            armyShareCode?: string | null;
            attack: boolean;
            availableLoot?: components["schemas"]["Resource"][];
            /** @enum {string} */
            battleType: "ranked" | "legend" | "homeVillage";
            destructionPercentage: number;
            extraLootedResources?: components["schemas"]["Resource"][];
            lootedResources?: components["schemas"]["Resource"][];
            opponentPlayerTag: string;
            stars: number;
        };
        Resource: {
            amount: number;
            name: string;
        };
        Player: {
            achievements?: components["schemas"]["PlayerAchievementProgress"][];
            attackWins: number;
            bestBuilderBaseTrophies?: number | null;
            bestTrophies: number;
            builderBaseLeague?: components["schemas"]["BuilderBaseLeague"];
            builderBaseTrophies?: number | null;
            builderHallLevel?: number | null;
            clan?: components["schemas"]["PlayerClan"] | null;
            clanCapitalContributions?: number | null;
            currentLeagueGroupTag?: string | null;
            currentLeagueSeasonId?: number | null;
            defenseWins: number;
            donations?: number | null;
            donationsReceived?: number | null;
            expLevel: number;
            heroEquipment?: components["schemas"]["PlayerItemLevel"][];
            heroes?: components["schemas"]["PlayerItemLevel"][];
            labels?: components["schemas"]["Label"][];
            league?: components["schemas"]["League"] | null;
            leagueTier?: components["schemas"]["LeagueTier"];
            legendStatistics?: components["schemas"]["PlayerLegendStatistics"] | null;
            name: string;
            playerHouse?: components["schemas"]["PlayerHouse"] | null;
            previousLeagueGroupTag?: string | null;
            previousLeagueSeasonId?: number | null;
            role?: string | null;
            spells?: components["schemas"]["PlayerItemLevel"][];
            tag: string;
            townHallLevel: number;
            troops?: components["schemas"]["PlayerItemLevel"][];
            trophies: number;
            warPreference?: string | null;
            warStars: number;
        };
        PlayerItemLevel: {
            equipment?: components["schemas"]["PlayerItemLevel"][] | null;
            level: number;
            maxLevel: number;
            name: string;
            superTroopIsActive?: boolean | null;
            village: string;
        };
        PlayerHouse: {
            elements?: components["schemas"]["PlayerHouseElement"][];
        };
        PlayerHouseElement: {
            id: number;
            type: string;
        };
        PlayerLegendStatistics: {
            bestBuilderBaseSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
            bestSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
            currentSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
            legendTrophies?: number | null;
            previousBuilderBaseSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
            previousSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
        };
        LegendLeagueTournamentSeasonResult: {
            id?: string | null;
            rank?: number | null;
            trophies?: number | null;
        };
        PlayerClan: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel?: number | null;
            name: string;
            tag: string;
        };
        PlayerAchievementProgress: {
            completionInfo?: string | null;
            info?: string | null;
            name: string;
            stars: number;
            target: number;
            value: number;
            village: string;
        };
        CapitalRaidSeasonsResponse: {
            items: components["schemas"]["ClanCapitalRaidSeason"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        ClanCapitalRaidSeason: {
            attackLog?: components["schemas"]["ClanCapitalRaidSeasonAttackLogEntry"][];
            capitalTotalLoot: number;
            defenseLog?: components["schemas"]["ClanCapitalRaidSeasonDefenseLogEntry"][];
            defensiveReward: number;
            endTime: string;
            enemyDistrictsDestroyed: number;
            members?: components["schemas"]["ClanCapitalRaidSeasonMember"][];
            offensiveReward: number;
            raidsCompleted: number;
            startTime: string;
            state: string;
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
            districts?: components["schemas"]["ClanCapitalRaidSeasonDistrict"][];
            districtsDestroyed: number;
        };
        ClanCapitalRaidSeasonDistrict: {
            attackCount: number;
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
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            level: number;
            name: string;
            tag: string;
        };
        ClanCapitalRaidSeasonAttackLogEntry: {
            attackCount: number;
            defender: components["schemas"]["ClanCapitalRaidSeasonClanInfo"];
            districtCount: number;
            districts?: components["schemas"]["ClanCapitalRaidSeasonDistrict"][];
            districtsDestroyed: number;
        };
        ClanWar: {
            /** @enum {string} */
            state: "notInWar";
        } | components["schemas"]["ActiveClanWar"];
        ActiveClanWar: {
            warStartTime?: string | null;
            attacksPerMember?: number | null;
            battleModifier?: string | null;
            clan: components["schemas"]["WarClan"];
            endTime: string;
            opponent: components["schemas"]["WarClan"];
            preparationStartTime: string;
            startTime: string;
            teamSize: number;
            /** @enum {string} */
            state: "preparation" | "inWar" | "warEnded";
        };
        WarClan: {
            attacks?: number | null;
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel: number;
            destructionPercentage?: number | null;
            expEarned?: number | null;
            members?: components["schemas"]["ClanWarMember"][];
            name?: string | null;
            stars?: number | null;
            tag?: string | null;
        };
        ClanWarMember: {
            attacks?: components["schemas"]["ClanWarAttack"][];
            bestOpponentAttack?: components["schemas"]["ClanWarAttack"] | null;
            mapPosition: number;
            name: string;
            opponentAttacks?: number | null;
            tag: string;
            townhallLevel: number;
        };
        ClanWarAttack: {
            attackerTag: string;
            defenderTag: string;
            destructionPercentage: number;
            duration?: number | null;
            order: number;
            stars: number;
        };
        ClanWarLeagueGroup: {
            clans?: components["schemas"]["ClanWarLeagueClan"][];
            rounds?: components["schemas"]["ClanWarLeagueRound"][];
            season?: string | null;
            state: string;
            tag?: string | null;
        };
        ClanWarLeagueRound: {
            warTags?: string[];
        };
        ClanWarLeagueClan: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
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
            paging?: components["schemas"]["Paging"] | null;
        };
        ClanWarLogEntry: {
            attacksPerMember?: number | null;
            battleModifier?: string | null;
            clan: components["schemas"]["WarClan"];
            endTime: string;
            opponent: components["schemas"]["WarClan"];
            result?: string | null;
            teamSize: number;
        };
        ClanMembersResponse: {
            items: components["schemas"]["ClanMember"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        ClanMember: {
            builderBaseLeague?: components["schemas"]["League"] | null;
            builderBaseTrophies?: number | null;
            clanRank: number;
            donations: number;
            donationsReceived: number;
            expLevel: number;
            league?: components["schemas"]["League"] | null;
            name: string;
            playerHouse?: components["schemas"]["PlayerHouse"] | null;
            previousClanRank: number;
            role: string;
            tag: string;
            townHallLevel: number;
            trophies: number;
            versusTrophies?: number | null;
        };
        Clan: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            capitalLeague?: components["schemas"]["CapitalLeague"] | null;
            chatLanguage?: components["schemas"]["Language"] | null;
            clanBuilderBasePoints?: number | null;
            clanCapital: components["schemas"]["ClanCapital"];
            clanCapitalPoints?: number | null;
            clanLevel: number;
            clanPoints: number;
            clanVersusPoints?: number | null;
            description?: string | null;
            isFamilyFriendly?: boolean | null;
            isWarLogPublic?: boolean | null;
            labels?: components["schemas"]["Label"][];
            location?: components["schemas"]["Location"] | null;
            memberList?: components["schemas"]["ClanMember"][];
            members: number;
            name: string;
            requiredBuilderBaseTrophies?: number | null;
            requiredTownhallLevel?: number | null;
            requiredTrophies?: number | null;
            requiredVersusTrophies?: number | null;
            tag: string;
            /** @enum {string} */
            type: "open" | "inviteOnly" | "closed";
            warFrequency?: ("unknown" | "always" | "moreThanOncePerWeek" | "oncePerWeek" | "lessThanOncePerWeek" | "never" | "any") | null;
            warLeague?: components["schemas"]["WarLeague"] | null;
            warLosses?: number | null;
            warTies?: number | null;
            warWinStreak?: number | null;
            warWins?: number | null;
        };
        ClanCapital: {
            capitalHallLevel?: number | null;
            /** Format: int64 */
            clanGoldSinkTotal: number;
            districts?: components["schemas"]["ClanCapitalDistrict"][];
        };
        ClanCapitalDistrict: {
            districtHallLevel: number;
            id: number;
            name: string;
        };
        Language: {
            id: number;
            languageCode: string;
            name: string;
        };
        ClanSearchResponse: {
            items: components["schemas"]["ClanSearchItem"][];
            paging?: components["schemas"]["Paging"] | null;
        };
        ClanSearchItem: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            capitalLeague?: components["schemas"]["CapitalLeague"] | null;
            chatLanguage?: components["schemas"]["Language"] | null;
            clanBuilderBasePoints?: number | null;
            clanCapitalPoints?: number | null;
            clanLevel: number;
            clanPoints: number;
            clanVersusPoints?: number | null;
            isFamilyFriendly?: boolean | null;
            isWarLogPublic?: boolean | null;
            labels?: components["schemas"]["Label"][];
            location?: components["schemas"]["Location"] | null;
            members: number;
            name: string;
            requiredBuilderBaseTrophies?: number | null;
            requiredTownhallLevel?: number | null;
            requiredTrophies?: number | null;
            requiredVersusTrophies?: number | null;
            tag: string;
            /** @enum {string} */
            type: "open" | "inviteOnly" | "closed";
            warFrequency?: ("unknown" | "always" | "moreThanOncePerWeek" | "oncePerWeek" | "lessThanOncePerWeek" | "never" | "any") | null;
            warLeague?: components["schemas"]["WarLeague"] | null;
            warLosses?: number | null;
            warTies?: number | null;
            warWinStreak?: number | null;
            warWins?: number | null;
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
                warFrequency?: string;
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
            /** @description ClanSearchResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanSearchResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description Clan */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Clan"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description ClanMembersResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanMembersResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description ClanWar */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanWar"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description ClanWarLogResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanWarLogResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description ClanWarLeagueGroup */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanWarLeagueGroup"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description ClanWar */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanWar"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description CapitalRaidSeasonsResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CapitalRaidSeasonsResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description Player */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Player"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description BattleLogResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BattleLogResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description LeagueHistoryResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueHistoryResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description VerifyTokenResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VerifyTokenResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description LeagueTierListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueTierListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description LeagueTier */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueTier"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description CapitalLeagueListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CapitalLeagueListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description CapitalLeague */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CapitalLeague"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description BuilderBaseLeagueListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BuilderBaseLeagueListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description BuilderBaseLeague */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BuilderBaseLeague"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description WarLeagueListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WarLeagueListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description WarLeague */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WarLeague"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description LeagueSeasonListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueSeasonListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description PlayerSeasonRankingListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlayerSeasonRankingListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description LeagueGroup */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeagueGroup"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description LocationListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LocationListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description Location */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Location"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description ClanRankingListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanRankingListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description PlayerRankingListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlayerRankingListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description PlayerBuilderBaseRankingListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PlayerBuilderBaseRankingListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description ClanBuilderBaseRankingListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanBuilderBaseRankingListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description ClanCapitalRankingListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClanCapitalRankingListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description LabelListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabelListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description LabelListResponse */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabelListResponse"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
            /** @description GoldPassSeason */
            200: {
                headers: {
                    "cache-control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GoldPassSeason"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Access denied */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Request throttled */
            429: {
                headers: {
                    "retry-after"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Endpoint retired */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description Service temporarily unavailable */
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
