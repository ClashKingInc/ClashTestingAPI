export interface paths {
    "/clans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
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
        BadgeUrls: {
            large?: string | null;
            medium?: string | null;
            small?: string | null;
        } & {
            [key: string]: unknown;
        };
        CapitalLeague: {
            id: number;
            name: string;
        } & {
            [key: string]: unknown;
        };
        Language: {
            id: number;
            languageCode: string;
            name: string;
        } & {
            [key: string]: unknown;
        };
        IconUrls: {
            large?: string | null;
            medium?: string | null;
            small?: string | null;
            tiny?: string | null;
        } & {
            [key: string]: unknown;
        };
        Label: {
            iconUrls?: components["schemas"]["IconUrls"] | null;
            id: number;
            name: string;
        } & {
            [key: string]: unknown;
        };
        Location: {
            countryCode?: string | null;
            id: number;
            isCountry: boolean;
            localizedName?: string | null;
            name: string;
        } & {
            [key: string]: unknown;
        };
        WarLeague: {
            id: number;
            name: string;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        CursorPaging: {
            after?: string | null;
            before?: string | null;
        } & {
            [key: string]: unknown;
        };
        Paging: {
            cursors?: components["schemas"]["CursorPaging"];
        } & {
            [key: string]: unknown;
        };
        ClanSearchResponse: {
            items: components["schemas"]["ClanSearchItem"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        ClientErrorResponse: {
            detail?: Record<string, never> | null;
            message?: string | null;
            reason: string;
            type?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClientErrorResponse_1: {
            detail?: Record<string, never> | null;
            message?: string | null;
            reason: string;
            type?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClientErrorResponse_2: {
            detail?: Record<string, never> | null;
            message?: string | null;
            reason: string;
            type?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClientErrorResponse_3: {
            detail?: Record<string, never> | null;
            message?: string | null;
            reason: string;
            type?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClientErrorResponse_4: {
            detail?: Record<string, never> | null;
            message?: string | null;
            reason: string;
            type?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClientErrorResponse_5: {
            detail?: Record<string, never> | null;
            message?: string | null;
            reason: string;
            type?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClientErrorResponse_6: {
            detail?: Record<string, never> | null;
            message?: string | null;
            reason: string;
            type?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClanCapitalDistrict: {
            districtHallLevel: number;
            id: number;
            name: string;
        } & {
            [key: string]: unknown;
        };
        ClanCapital: {
            capitalHallLevel?: number | null;
            clanGoldSinkTotal: number & unknown;
            districts?: components["schemas"]["ClanCapitalDistrict"][];
        } & {
            [key: string]: unknown;
        };
        League: {
            iconUrls?: components["schemas"]["IconUrls"] | null;
            id: number;
            name: string;
        } & {
            [key: string]: unknown;
        };
        PlayerHouseElement: {
            id: number;
            type: string;
        } & {
            [key: string]: unknown;
        };
        PlayerHouse: {
            elements?: components["schemas"]["PlayerHouseElement"][];
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        ClanMembersResponse: {
            items: components["schemas"]["ClanMember"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        ClanWarAttack: {
            attackerTag: string;
            defenderTag: string;
            destructionPercentage: number | ("Infinity" | "-Infinity" | "NaN");
            duration?: number | null;
            order: number;
            stars: number;
        } & {
            [key: string]: unknown;
        };
        ClanWarMember: {
            attacks?: components["schemas"]["ClanWarAttack"][];
            bestOpponentAttack?: components["schemas"]["ClanWarAttack"] | null;
            mapPosition: number;
            name: string;
            opponentAttacks?: number | null;
            tag: string;
            townhallLevel: number;
        } & {
            [key: string]: unknown;
        };
        WarClan: {
            attacks?: number | null;
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel: number;
            destructionPercentage?: (number | ("Infinity" | "-Infinity" | "NaN")) | null;
            expEarned?: number | null;
            members?: components["schemas"]["ClanWarMember"][];
            name?: string | null;
            stars?: number | null;
            tag?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClanWar: {
            attacksPerMember?: number | null;
            battleModifier?: string | null;
            clan?: components["schemas"]["WarClan"] | null;
            endTime?: string | null;
            opponent?: components["schemas"]["WarClan"] | null;
            preparationStartTime?: string | null;
            startTime?: string | null;
            state: string;
            teamSize?: number | null;
        } & {
            [key: string]: unknown;
        };
        ClanWarLogEntry: {
            attacksPerMember?: number | null;
            battleModifier?: string | null;
            clan: components["schemas"]["WarClan"];
            endTime: string;
            opponent: components["schemas"]["WarClan"];
            result?: string | null;
            teamSize: number;
        } & {
            [key: string]: unknown;
        };
        ClanWarLogResponse: {
            items: components["schemas"]["ClanWarLogEntry"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        ClanWarLeagueClanMember: {
            name: string;
            tag: string;
            townHallLevel: number;
        } & {
            [key: string]: unknown;
        };
        ClanWarLeagueClan: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel: number;
            members?: components["schemas"]["ClanWarLeagueClanMember"][];
            name: string;
            tag: string;
        } & {
            [key: string]: unknown;
        };
        ClanWarLeagueRound: {
            warTags?: string[];
        } & {
            [key: string]: unknown;
        };
        ClanWarLeagueGroup: {
            clans?: components["schemas"]["ClanWarLeagueClan"][];
            rounds?: components["schemas"]["ClanWarLeagueRound"][];
            season?: string | null;
            state: string;
            tag?: string | null;
        } & {
            [key: string]: unknown;
        };
        ClanCapitalRaidSeasonClanInfo: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            level: number;
            name: string;
            tag: string;
        } & {
            [key: string]: unknown;
        };
        ClanCapitalRaidSeasonAttacker: {
            name: string;
            tag: string;
        } & {
            [key: string]: unknown;
        };
        ClanCapitalRaidSeasonAttack: {
            attacker: components["schemas"]["ClanCapitalRaidSeasonAttacker"];
            destructionPercent: number;
            stars: number;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        ClanCapitalRaidSeasonAttackLogEntry: {
            attackCount: number;
            defender: components["schemas"]["ClanCapitalRaidSeasonClanInfo"];
            districtCount: number;
            districts?: components["schemas"]["ClanCapitalRaidSeasonDistrict"][];
            districtsDestroyed: number;
        } & {
            [key: string]: unknown;
        };
        ClanCapitalRaidSeasonDefenseLogEntry: {
            attackCount: number;
            attacker: components["schemas"]["ClanCapitalRaidSeasonClanInfo"];
            districtCount: number;
            districts?: components["schemas"]["ClanCapitalRaidSeasonDistrict"][];
            districtsDestroyed: number;
        } & {
            [key: string]: unknown;
        };
        ClanCapitalRaidSeasonMember: {
            attackLimit: number;
            attacks: number;
            bonusAttackLimit: number;
            capitalResourcesLooted: number;
            name: string;
            tag: string;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        CapitalRaidSeasonsResponse: {
            items: components["schemas"]["ClanCapitalRaidSeason"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        PlayerAchievementProgress: {
            completionInfo?: string | null;
            info?: string | null;
            name: string;
            stars: number;
            target: number;
            value: number;
            village: string;
        } & {
            [key: string]: unknown;
        };
        BuilderBaseLeague: {
            id: number;
            name: string;
        } & {
            [key: string]: unknown;
        };
        PlayerClan: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel?: number | null;
            name: string;
            tag: string;
        } & {
            [key: string]: unknown;
        };
        PlayerItemLevel: {
            equipment?: components["schemas"]["PlayerItemLevel"][] | null;
            level: number;
            maxLevel: number;
            name: string;
            superTroopIsActive?: boolean | null;
            village: string;
        } & {
            [key: string]: unknown;
        };
        LeagueTier: {
            iconUrls?: components["schemas"]["IconUrls"] | null;
            id: number;
            name: string;
        } & {
            [key: string]: unknown;
        };
        LegendLeagueTournamentSeasonResult: {
            id?: string | null;
            rank?: number | null;
            trophies?: number | null;
        } & {
            [key: string]: unknown;
        };
        PlayerLegendStatistics: {
            bestBuilderBaseSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
            bestSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
            currentSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
            legendTrophies?: number | null;
            previousBuilderBaseSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
            previousSeason?: components["schemas"]["LegendLeagueTournamentSeasonResult"] | null;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        Resource: {
            amount: number;
            name: string;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        BattleLogResponse: {
            items: components["schemas"]["BattleLogEntry"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        LeagueHistoryResponse: {
            items: components["schemas"]["LeagueSeasonResult"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        VerifyTokenRequest: {
            token: string;
        } & {
            [key: string]: unknown;
        };
        VerifyTokenResponse: {
            status: string;
            tag: string;
            token: string;
        } & {
            [key: string]: unknown;
        };
        LeagueTierListResponse: {
            items: components["schemas"]["LeagueTier"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        CapitalLeagueListResponse: {
            items: components["schemas"]["CapitalLeague"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        BuilderBaseLeagueListResponse: {
            items: components["schemas"]["BuilderBaseLeague"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        WarLeagueListResponse: {
            items: components["schemas"]["WarLeague"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        LeagueSeason: {
            id: string;
        } & {
            [key: string]: unknown;
        };
        LeagueSeasonListResponse: {
            items: components["schemas"]["LeagueSeason"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        ClanReference: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel?: number | null;
            name: string;
            tag: string;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        PlayerSeasonRankingListResponse: {
            items: components["schemas"]["PlayerSeasonRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        LeagueBattleLogEntry: {
            creationTime: string;
            destructionPercentage: number;
            opponentName: string;
            opponentPlayerTag: string;
            stars: number;
            trophies: number;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        LeagueGroup: {
            attackLogs?: components["schemas"]["LeagueBattleLogEntry"][];
            defenseLogs?: components["schemas"]["LeagueBattleLogEntry"][];
            members?: components["schemas"]["LeagueGroupMember"][];
        } & {
            [key: string]: unknown;
        };
        LocationListResponse: {
            items: components["schemas"]["Location"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        ClanRanking: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanLevel: number;
            clanPoints: number;
            location: components["schemas"]["Location"];
            members: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        } & {
            [key: string]: unknown;
        };
        ClanRankingListResponse: {
            items: components["schemas"]["ClanRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
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
        } & {
            [key: string]: unknown;
        };
        PlayerRankingListResponse: {
            items: components["schemas"]["PlayerRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        PlayerBuilderBaseRanking: {
            builderBaseLeague?: components["schemas"]["BuilderBaseLeague"];
            builderBaseTrophies: number;
            clan?: components["schemas"]["ClanReference"] | null;
            expLevel: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        } & {
            [key: string]: unknown;
        };
        PlayerBuilderBaseRankingListResponse: {
            items: components["schemas"]["PlayerBuilderBaseRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        ClanBuilderBaseRanking: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanBuilderBasePoints: number;
            clanLevel: number;
            clanPoints?: number | null;
            location: components["schemas"]["Location"];
            members: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        } & {
            [key: string]: unknown;
        };
        ClanBuilderBaseRankingListResponse: {
            items: components["schemas"]["ClanBuilderBaseRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        ClanCapitalRanking: {
            badgeUrls?: components["schemas"]["BadgeUrls"] | null;
            clanCapitalPoints: number;
            clanLevel: number;
            location: components["schemas"]["Location"];
            members: number;
            name: string;
            previousRank: number;
            rank: number;
            tag: string;
        } & {
            [key: string]: unknown;
        };
        ClanCapitalRankingListResponse: {
            items: components["schemas"]["ClanCapitalRanking"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        LabelListResponse: {
            items: components["schemas"]["Label"][];
            paging?: components["schemas"]["Paging"] | null;
        } & {
            [key: string]: unknown;
        };
        GoldPassSeason: {
            endTime: string;
            startTime: string;
        } & {
            [key: string]: unknown;
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
                limit?: string;
                after?: string;
                before?: string;
                name?: string;
                warFrequency?: string;
                locationId?: string;
                minMembers?: string;
                maxMembers?: string;
                minClanPoints?: string;
                minClanLevel?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "clans.members": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "clans.warlog": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "clans.raids": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "leagues.tiers": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "leagues.capitals": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "leagues.builders": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "leagues.wars": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "leagues.seasons": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "leagues.season": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "locations.list": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "locations.clans": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "locations.players": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "locations.builders": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "locations.builderClans": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "locations.capitals": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "labels.players": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
    "labels.clans": {
        parameters: {
            query?: {
                limit?: string;
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
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
            /** @description ClientErrorResponse */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse"];
                };
            };
            /** @description ClientErrorResponse */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_1"];
                };
            };
            /** @description ClientErrorResponse */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_2"];
                };
            };
            /** @description ClientErrorResponse */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_3"];
                };
            };
            /** @description ClientErrorResponse */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_4"];
                };
            };
            /** @description ClientErrorResponse */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_5"];
                };
            };
            /** @description ClientErrorResponse */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientErrorResponse_6"];
                };
            };
        };
    };
}
