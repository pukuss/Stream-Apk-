// src/data/gamesData.js

import { staticImage } from "../constants/cloud.Image";

export const gamesData = [
    {
        id: 1,
        slug: "call-of-duty-mobile",

        officialName: "Call of Duty®: Mobile",
        product :"Activision",
        category: "Mobile FPS / Battle Royale",
        genre: ["First-Person Shooter", "Battle Royale", "Tactical Shooter"],
        platforms: ["Android", "iOS"],
        releaseDate: "October 1, 2019",
        currentStatus: "Active",

        images: {
            logo: staticImage?.logos?.cod_logo || "",
            banner: staticImage?.cod_banner || staticImage?.bgmi_banner || "",
            cover: staticImage?.cod_cover || null,
            background: staticImage?.cod_background || null,
        },

        hero: {
            title: "Call of Duty: Mobile",
            subtitle: "Fast-paced FPS action built for mobile players.",
            description:
                "Call of Duty: Mobile brings the famous Call of Duty shooting experience to smartphones with multiplayer battles, battle royale survival, iconic maps, operators, weapons, and seasonal events.",
            buttonText: "View Game Info",
        },

        about: {
            heading: "About Call of Duty: Mobile",
            description:
                "Call of Duty: Mobile is a free-to-play mobile shooter game designed for Android and iOS. It gives players classic Call of Duty-style action with 5v5 multiplayer, battle royale, tactical modes, custom loadouts, ranked matches, clans, and regular seasonal updates.",
        },

        madeBy: {
            heading: "Who Made Call of Duty: Mobile?",
            description:
                "Call of Duty: Mobile was developed by TiMi Studio Group, a studio under Tencent Games, and published by Activision. The game was built to bring the Call of Duty experience to mobile devices with optimized controls, mobile-friendly maps, multiplayer battles, and battle royale gameplay.",
            companies: [
                {
                    role: "Developer",
                    name: "TiMi Studio Group",
                },
                {
                    role: "Parent Company",
                    name: "Tencent Games",
                },
                {
                    role: "Publisher",
                    name: "Activision",
                },
            ],
        },

        history: {
            heading: "History of Call of Duty: Mobile",
            shortHistory:
                "Call of Duty: Mobile was created to bring the famous Call of Duty franchise to mobile players. It combined popular maps, weapons, characters, and game modes from different Call of Duty titles into one mobile experience.",

            timeline: [
                {
                    year: "2019",
                    title: "Official Launch",
                    description:
                        "Call of Duty: Mobile launched globally on October 1, 2019 for Android and iOS. It arrived as a free-to-play mobile game with multiplayer and battle royale gameplay.",
                },
                {
                    year: "2019 - Past",
                    title: "Early Gameplay Focus",
                    description:
                        "At launch, the game focused on classic multiplayer modes, iconic maps, mobile controls, weapons, scorestreaks, and a battle royale mode made for mobile.",
                },
                {
                    year: "2020 - 2024",
                    title: "Growth and Seasonal Updates",
                    description:
                        "The game continued to grow with new seasons, battle passes, operators, weapons, events, maps, and limited-time modes.",
                },
                {
                    year: "Present",
                    title: "Current Game State",
                    description:
                        "Call of Duty: Mobile is still active with multiplayer, battle royale, DMZ-style gameplay, events, ranked play, clans, and seasonal content.",
                },
            ],
        },

        gameplay: {
            heading: "Gameplay",
            description:
                "The gameplay is based on shooting, movement, teamwork, weapon control, map knowledge, and strategy. Players can fight in small multiplayer matches, large battle royale matches, or tactical extraction-style gameplay.",
            features: [
                "Fast shooting mechanics",
                "Mobile-friendly controls",
                "Custom weapon loadouts",
                "Operators and character skins",
                "Scorestreaks and tactical equipment",
                "Voice and text chat",
                "Ranked and social play",
                "Clan system",
            ],
        },

        popularMaps: [
            "Nuketown",
            "Shipment",
            "Raid",
            "Rust",
            "Terminal",
            "Satellite",
            "Standoff",
            "Alcatraz",
            "Isolated",
            "Krai",
        ],

        whyPopular: {
            heading: "Why Call of Duty: Mobile is Popular",
            points: [
                "It brings console-style Call of Duty action to mobile.",
                "It has fast 5v5 multiplayer matches.",
                "It supports battle royale and tactical gameplay.",
                "It includes famous maps, weapons, and characters from the Call of Duty franchise.",
                "It has ranked gameplay, clans, events, and seasonal updates.",
                "It is suitable for casual players and competitive esports players.",
            ],
        },

        officialDocs: [
            {
                title: "Official Call of Duty: Mobile Website",
                type: "Official Website",
                url: "https://www.callofduty.com/mobile",
            },
            {
                title: "Activision Launch Press Release",
                type: "Official Press Release",
                url: "https://investor.activision.com/news-releases/news-release-details/call-duty-mobile-launches-october-1",
            },
            {
                title: "TiMi Studio Group CODM Page",
                type: "Developer Website",
                url: "https://www.timistudios.com/games/call-of-duty-mobile",
            },
            {
                title: "Google Play Store Page",
                type: "Official Store Page",
                url: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter",
            },
            {
                title: "Activision Support",
                type: "Support",
                url: "https://support.activision.com/cod-mobile",
            },
        ],

        seo: {
            title: "Call of Duty: Mobile Game Info, History, Modes and Details",
            description:
                "Read full information about Call of Duty: Mobile including who made it, its history, game modes, maps, platforms, and official sources.",
            keywords: [
                "Call of Duty Mobile",
                "CODM",
                "COD Mobile history",
                "Call of Duty Mobile developer",
                "Call of Duty Mobile game modes",
                "CODM tournament",
            ],
        },
    },

    {
        id: 2,
        slug: "free-fire",

        officialName: "Garena Free Fire",
        category: "Mobile Battle Royale / Survival Shooter",
        genre: ["Battle Royale", "Survival Shooter", "Multiplayer Shooter"],
        platforms: ["Android", "iOS"],
        releaseDate: "December 8, 2017",
        currentStatus: "Active",

        images: {
            logo: staticImage?.logos?.freefire_logo || "",
            banner: staticImage?.freefire_banner || "",
            cover: staticImage?.freefire_cover || null,
            background: staticImage?.freefire_background || null,
        },

        hero: {
            title: "Free Fire",
            subtitle: "Fast survival shooter made for mobile players.",
            description:
                "Free Fire is a mobile battle royale game where players land on an island, collect weapons, fight enemies, and try to become the last survivor.",
            buttonText: "View Game Info",
        },

        about: {
            heading: "About Free Fire",
            description:
                "Free Fire is a free-to-play mobile survival shooter. Each match is short, fast, and action-focused. Players choose a landing location, collect weapons and supplies, stay inside the safe zone, and fight to survive until the end.",
        },

        madeBy: {
            heading: "Who Made Free Fire?",
            description:
                "Free Fire was developed and published by Garena. The game was designed to run smoothly on mobile devices and became popular because of its quick matches, simple controls, character skills, and competitive battle royale gameplay.",
            companies: [
                {
                    role: "Developer",
                    name: "Garena",
                },
                {
                    role: "Publisher",
                    name: "Garena",
                },
                {
                    role: "Platform",
                    name: "Android and iOS",
                },
            ],
        },

        history: {
            heading: "History of Free Fire",
            shortHistory:
                "Free Fire became popular as a lightweight and fast battle royale game for mobile players. Its short match time, smooth performance, and character-based gameplay helped it grow in many countries.",

            timeline: [
                {
                    year: "2017",
                    title: "Initial Release",
                    description:
                        "Free Fire was released for mobile players as a survival shooter and battle royale game.",
                },
                {
                    year: "2018 - 2020",
                    title: "Global Growth",
                    description:
                        "The game became popular because of short matches, mobile-friendly controls, character abilities, and easy access on many smartphones.",
                },
                {
                    year: "2021 - 2024",
                    title: "Esports and Content Expansion",
                    description:
                        "Free Fire grew with new characters, events, maps, ranked modes, Clash Squad, collaborations, and esports competitions.",
                },
                {
                    year: "Present",
                    title: "Current Game State",
                    description:
                        "Free Fire is still active with Battle Royale, Clash Squad, events, character abilities, cosmetics, and seasonal updates.",
                },
            ],
        },

        gameplay: {
            heading: "Gameplay",
            description:
                "Free Fire gameplay is focused on survival, looting, fast combat, safe-zone movement, character skills, and smart positioning. Players must defeat enemies and survive until the final zone.",
            features: [
                "Short battle royale matches",
                "Character skill system",
                "Weapon looting",
                "Safe zone survival",
                "Vehicles and map movement",
                "Clash Squad mode",
                "Ranked gameplay",
                "Squad communication",
            ],
        },

        popularMaps: ["Bermuda", "Purgatory", "Kalahari", "Alpine", "Nexterra", "Solara"],

        whyPopular: {
            heading: "Why Free Fire is Popular",
            points: [
                "It runs on many smartphones.",
                "Matches are short and exciting.",
                "It has character skills and stylish gameplay.",
                "It supports Battle Royale and Clash Squad modes.",
                "It has regular events, skins, rewards, and collaborations.",
                "It is very suitable for mobile esports and custom room tournaments.",
            ],
        },

        officialDocs: [
            {
                title: "Official Free Fire Website",
                type: "Official Website",
                url: "https://ff.garena.com/",
            },
            {
                title: "Free Fire Google Play Page",
                type: "Official Store Page",
                url: "https://play.google.com/store/apps/details?id=com.dts.freefireth",
            },
            {
                title: "Free Fire MAX Google Play Page",
                type: "Official Store Page",
                url: "https://play.google.com/store/apps/details?id=com.dts.freefiremax",
            },
            {
                title: "Garena Account Center",
                type: "Official Account",
                url: "https://account.garena.com/",
            },
        ],

        seo: {
            title: "Free Fire Game Info, History, Modes and Details",
            description:
                "Read full information about Free Fire including who made it, its history, gameplay, maps, platforms, and official sources.",
            keywords: [
                "Free Fire",
                "Garena Free Fire",
                "Free Fire history",
                "Free Fire developer",
                "Free Fire battle royale",
                "Free Fire tournament",
            ],
        },
    },

    {
        id: 3,
        slug: "minecraft",

        officialName: "Minecraft",
        category: "Sandbox / Survival / Creative",
        genre: ["Sandbox", "Survival", "Adventure", "Creative Building"],
        platforms: ["Android", "iOS", "Windows", "macOS", "Linux", "Xbox", "PlayStation", "Nintendo Switch"],
        releaseDate: "November 18, 2011",
        currentStatus: "Active",

        images: {
            logo: staticImage?.logos?.minecraft_logo || "",
            banner: staticImage?.minecraft_banner || "",
            cover: staticImage?.minecraft_cover || null,
            background: staticImage?.minecraft_background || null,
        },

        hero: {
            title: "Minecraft",
            subtitle: "Create, explore, survive, and build anything you imagine.",
            description:
                "Minecraft is a sandbox game where players explore block-based worlds, gather resources, craft tools, build structures, fight mobs, and create their own adventures.",
            buttonText: "View Game Info",
        },

        about: {
            heading: "About Minecraft",
            description:
                "Minecraft is an open-ended sandbox game where players can build, explore, mine, craft, survive, and play with friends. It gives players freedom to create houses, cities, farms, machines, adventures, mini-games, and custom worlds.",
        },

        madeBy: {
            heading: "Who Made Minecraft?",
            description:
                "Minecraft was originally created by Markus Persson, also known as Notch. The game later became part of Mojang Studios, and today Minecraft is connected with Mojang Studios and Xbox Game Studios under Microsoft.",
            companies: [
                {
                    role: "Original Creator",
                    name: "Markus Persson / Notch",
                },
                {
                    role: "Developer",
                    name: "Mojang Studios",
                },
                {
                    role: "Publisher",
                    name: "Mojang Studios / Xbox Game Studios",
                },
            ],
        },

        history: {
            heading: "History of Minecraft",
            shortHistory:
                "Minecraft started as a simple block-building sandbox game and slowly became one of the most influential games in the world. Its creative freedom, survival gameplay, multiplayer servers, mods, and community content made it popular globally.",

            timeline: [
                {
                    year: "2009",
                    title: "Early Development",
                    description:
                        "Minecraft began as an early experimental sandbox game focused on blocks, building, mining, and survival ideas.",
                },
                {
                    year: "2011",
                    title: "Official Full Release",
                    description:
                        "Minecraft officially released as a full game and became widely known for its creative and survival gameplay.",
                },
                {
                    year: "2014",
                    title: "Microsoft Acquisition",
                    description:
                        "Microsoft acquired Mojang, helping Minecraft expand across platforms, services, education, marketplace content, and online play.",
                },
                {
                    year: "Present",
                    title: "Current Game State",
                    description:
                        "Minecraft is still active with Java Edition, Bedrock Edition, Marketplace, Realms, servers, mods, updates, and a massive global community.",
                },
            ],
        },

        gameplay: {
            heading: "Gameplay",
            description:
                "Minecraft gameplay is based on exploration, mining blocks, crafting items, building structures, surviving enemies, farming, redstone machines, multiplayer servers, and creative world-making.",
            features: [
                "Open-world sandbox gameplay",
                "Survival and Creative modes",
                "Block-based building",
                "Crafting and mining",
                "Mobs and bosses",
                "Multiplayer servers",
                "Mods and add-ons",
                "Redstone engineering",
            ],
        },

        popularMaps: [
            "Overworld",
            "Nether",
            "The End",
            "Villages",
            "Strongholds",
            "Mineshafts",
            "Ancient Cities",
            "Woodland Mansions",
        ],

        whyPopular: {
            heading: "Why Minecraft is Popular",
            points: [
                "It gives players full creative freedom.",
                "Players can build almost anything they imagine.",
                "It has survival, adventure, creative, and multiplayer gameplay.",
                "It supports mods, servers, maps, skins, and community content.",
                "It is useful for creativity, logic, teamwork, and learning.",
                "It can be played casually or competitively through servers and mini-games.",
            ],
        },

        officialDocs: [
            {
                title: "Official Minecraft Website",
                type: "Official Website",
                url: "https://www.minecraft.net/",
            },
            {
                title: "Minecraft Google Play Page",
                type: "Official Store Page",
                url: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe",
            },
            {
                title: "Minecraft Help Center",
                type: "Support",
                url: "https://help.minecraft.net/",
            },
            {
                title: "Minecraft Usage Guidelines",
                type: "Official Guidelines",
                url: "https://www.minecraft.net/en-us/usage-guidelines",
            },
        ],

        seo: {
            title: "Minecraft Game Info, History, Modes and Details",
            description:
                "Read full information about Minecraft including who made it, its history, gameplay, worlds, platforms, and official sources.",
            keywords: [
                "Minecraft",
                "Minecraft history",
                "Minecraft developer",
                "Minecraft survival",
                "Minecraft creative",
                "Minecraft multiplayer",
            ],
        },
    },

    {
        id: 4,
        slug: "bgmi",

        officialName: "Battlegrounds Mobile India",
        category: "Mobile Battle Royale / Multiplayer Shooter",
        genre: ["Battle Royale", "Multiplayer Shooter", "Survival Shooter"],
        platforms: ["Android", "iOS"],
        releaseDate: "July 2, 2021",
        currentStatus: "Active",

        images: {
            logo: staticImage?.logos?.bgmi_logo || "",
            banner: staticImage?.bgmi_banner || "",
            cover: staticImage?.bgmi_cover || null,
            background: staticImage?.bgmi_background || null,
        },

        hero: {
            title: "Battlegrounds Mobile India",
            subtitle: "India’s battle royale experience for mobile players.",
            description:
                "BGMI is a multiplayer battle royale game where players land on large maps, collect weapons, survive against enemies, and compete to become the last player or squad standing.",
            buttonText: "View Game Info",
        },

        about: {
            heading: "About BGMI",
            description:
                "Battlegrounds Mobile India, also known as BGMI, is an online multiplayer battle royale game made for Indian players. It features classic battle royale gameplay, realistic gunfights, vehicles, squads, ranked matches, events, and multiple maps.",
        },

        madeBy: {
            heading: "Who Made BGMI?",
            description:
                "BGMI was developed and published by KRAFTON. It was created as an India-focused battle royale game for mobile players with maps, modes, events, and competitive gameplay.",
            companies: [
                {
                    role: "Developer",
                    name: "KRAFTON",
                },
                {
                    role: "Publisher",
                    name: "KRAFTON",
                },
                {
                    role: "Region Focus",
                    name: "India",
                },
            ],
        },

        history: {
            heading: "History of BGMI",
            shortHistory:
                "BGMI was launched for Indian players after the popularity of mobile battle royale games in India. It quickly became one of the most popular mobile esports titles in the country.",

            timeline: [
                {
                    year: "2021",
                    title: "Official Launch",
                    description:
                        "BGMI launched in India as a free-to-play multiplayer battle royale game with maps, modes, and mobile combat gameplay.",
                },
                {
                    year: "2021 - 2022",
                    title: "Growth in Indian Esports",
                    description:
                        "BGMI became a major mobile esports title in India with tournaments, squads, streamers, and competitive events.",
                },
                {
                    year: "2023 - 2025",
                    title: "Return and Content Updates",
                    description:
                        "The game continued with updates, events, themed modes, collaborations, and esports activities for Indian players.",
                },
                {
                    year: "Present",
                    title: "Current Game State",
                    description:
                        "BGMI is active with classic battle royale, arena modes, ranked matches, events, esports tournaments, and India-focused content.",
                },
            ],
        },

        gameplay: {
            heading: "Gameplay",
            description:
                "BGMI gameplay focuses on landing, looting, surviving, zone rotation, gunfights, squad teamwork, vehicles, map awareness, and tactical decision-making.",
            features: [
                "100-player battle royale matches",
                "Solo, duo, and squad gameplay",
                "Realistic gun mechanics",
                "Vehicles and map rotations",
                "Classic and Arena modes",
                "Ranked gameplay",
                "Voice chat and team coordination",
                "Esports-ready custom rooms",
            ],
        },

        popularMaps: ["Erangel", "Miramar", "Sanhok", "Vikendi", "Livik", "Karakin", "Nusa"],

        whyPopular: {
            heading: "Why BGMI is Popular",
            points: [
                "It is made specially for Indian mobile players.",
                "It has realistic battle royale gameplay.",
                "It supports squad teamwork and competitive play.",
                "It has multiple maps, weapons, vehicles, and game modes.",
                "It is one of the biggest mobile esports titles in India.",
                "It supports tournaments, custom rooms, and ranked competition.",
            ],
        },

        officialDocs: [
            {
                title: "Official BGMI Website",
                type: "Official Website",
                url: "https://www.battlegroundsmobileindia.com/",
            },
            {
                title: "KRAFTON India BGMI Page",
                type: "Official Publisher Page",
                url: "https://krafton.in/games/battlegrounds-mobile-india-bgmi/",
            },
            {
                title: "BGMI Launch News",
                type: "Official News",
                url: "https://www.battlegroundsmobileindia.com/news_view/615",
            },
            {
                title: "BGMI Google Play Page",
                type: "Official Store Page",
                url: "https://play.google.com/store/apps/details?id=com.pubg.imobile",
            },
            {
                title: "BGMI App Store Page",
                type: "Official Store Page",
                url: "https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837",
            },
        ],

        seo: {
            title: "BGMI Game Info, History, Maps, Modes and Details",
            description:
                "Read full information about Battlegrounds Mobile India including who made it, its history, gameplay, maps, platforms, and official sources.",
            keywords: [
                "BGMI",
                "Battlegrounds Mobile India",
                "BGMI history",
                "BGMI developer",
                "BGMI maps",
                "BGMI tournament",
            ],
        },
    },

    {
        id: 5,
        slug: "clash-of-clans",

        officialName: "Clash of Clans",
        category: "Mobile Strategy / Base Building",
        genre: ["Strategy", "Base Building", "Multiplayer", "War Game"],
        platforms: ["Android", "iOS", "Windows"],
        releaseDate: "August 2, 2012",
        currentStatus: "Active",

        images: {
            logo: staticImage?.logos?.coc_logo || "",
            banner: staticImage?.coc_banner || "",
            cover: staticImage?.coc_cover || null,
            background: staticImage?.coc_background || null,
        },

        hero: {
            title: "Clash of Clans",
            subtitle: "Build your village, raise your clan, and battle for victory.",
            description:
                "Clash of Clans is a strategy game where players build villages, train troops, join clans, attack enemy bases, defend their own base, and compete in clan wars.",
            buttonText: "View Game Info",
        },

        about: {
            heading: "About Clash of Clans",
            description:
                "Clash of Clans is a mobile strategy game focused on base building, troop training, resource management, attacks, defense, clans, and wars. Players upgrade buildings, unlock troops, design bases, and fight against other players.",
        },

        madeBy: {
            heading: "Who Made Clash of Clans?",
            description:
                "Clash of Clans was developed and published by Supercell. The game became popular because of its simple strategy gameplay, strong clan system, base-building mechanics, and long-term upgrade progression.",
            companies: [
                {
                    role: "Developer",
                    name: "Supercell",
                },
                {
                    role: "Publisher",
                    name: "Supercell",
                },
                {
                    role: "Game Universe",
                    name: "Clash Universe",
                },
            ],
        },

        history: {
            heading: "History of Clash of Clans",
            shortHistory:
                "Clash of Clans became one of the most successful mobile strategy games. Its combination of village building, troop attacks, clan wars, and upgrades created a long-lasting competitive community.",

            timeline: [
                {
                    year: "2012",
                    title: "Initial Launch",
                    description:
                        "Clash of Clans launched on iOS and introduced village building, troop training, attacking, and defending.",
                },
                {
                    year: "2013",
                    title: "Android Release",
                    description:
                        "The game expanded to Android, increasing its global player base and mobile gaming popularity.",
                },
                {
                    year: "2014 - 2020",
                    title: "Clan Wars and Major Growth",
                    description:
                        "Clan Wars, new troops, heroes, defenses, town halls, and events made Clash of Clans more competitive and social.",
                },
                {
                    year: "Present",
                    title: "Current Game State",
                    description:
                        "Clash of Clans is still active with new town hall levels, troops, heroes, events, clan wars, clan capital, and seasonal content.",
                },
            ],
        },

        gameplay: {
            heading: "Gameplay",
            description:
                "Clash of Clans gameplay is based on building a strong village, upgrading defenses, training armies, attacking enemy bases, collecting resources, joining clans, donating troops, and competing in wars.",
            features: [
                "Village building",
                "Troop training",
                "Base defense design",
                "Resource management",
                "Clan system",
                "Clan Wars",
                "Heroes and spells",
                "Builder Base and Clan Capital",
            ],
        },

        popularMaps: [
            "Home Village",
            "Builder Base",
            "Clan Capital",
            "War Base",
            "Friendly Challenge Base",
        ],

        whyPopular: {
            heading: "Why Clash of Clans is Popular",
            points: [
                "It has simple but deep strategy gameplay.",
                "Players can build and customize their own village.",
                "Clan Wars make the game social and competitive.",
                "It has long-term upgrades and progression.",
                "It receives regular events, updates, troops, and new content.",
                "It is easy to play casually but hard to master competitively.",
            ],
        },

        officialDocs: [
            {
                title: "Official Clash of Clans Website",
                type: "Official Website",
                url: "https://supercell.com/en/games/clashofclans/",
            },
            {
                title: "Clash of Clans Google Play Page",
                type: "Official Store Page",
                url: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans",
            },
            {
                title: "Clash of Clans App Store Page",
                type: "Official Store Page",
                url: "https://apps.apple.com/app/clash-of-clans/id529479190",
            },
            {
                title: "Supercell Support",
                type: "Support",
                url: "https://support.supercell.com/clash-of-clans/",
            },
        ],

        seo: {
            title: "Clash of Clans Game Info, History, Troops and Details",
            description:
                "Read full information about Clash of Clans including who made it, its history, gameplay, base building, clans, platforms, and official sources.",
            keywords: [
                "Clash of Clans",
                "COC",
                "Clash of Clans history",
                "Clash of Clans developer",
                "Clash of Clans gameplay",
                "Clash of Clans clan wars",
            ],
        },
    },
];