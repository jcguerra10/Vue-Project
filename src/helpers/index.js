export const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString();
    return random + date;
};

export const formatDate = (date) => {
    const newDate = new Date(date);
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
    };

    return newDate.toLocaleDateString("es-US", options);
};

export const namesOfVideoGames = () => {
    const arr = [
        "Among Us",
        "Animal Jam",
        "Apex Legends",
        "Audition Online",
        "Battlefield 4",
        "Black Desert Online",
        "Call of Duty",
        "Counter-Strike: Global Offensive",
        "DC Universe Online",
        "Dofus",
        "Doom",
        "Dota 2",
        "Dungeon Fighter Online (DFO)",
        "Evony",
        "Fantasy Westward Journey",
        "Farm Town",
        "FIFA 22",
        "Final Fantasy",
        "Fortnite",
        "Forza Horizon",
        "Grand Theft Auto Online",
        "Guild Wars 2",
        "H1Z1",
        "Hearthstone",
        "League of Legends",
        "Minecraft",
        "Overwatch",
        "Paladins",
        "PUBG : BATTLEGROUND",
        "Roblox",
        "Robocraft",
        "Rocket League",
        "Star Wars: The Old Republic",
        "Street Fighter II",
        "Team Fortress 2",
        "Teamfight Tactics",
        "Tetris",
        "Tom Clancy's Rainbow Six: Siege",
        "World of Warcraft",
        "Yu-Gi-Oh! Duel Links",
        "Other",
    ];

    return arr;
};

export const namesOfLabels = () => {
    const arr = ["Just Share", "Screenshots", "Recommendation", "Blog"];

    return arr;
};

export const namesOfGenres = () => {
    const arr = [
        "Sandbox",
        "Real-time strategy",
        "Shooters",
        "MOBA",
        "Role-playing",
        "Simulation and sports",
        "Puzzlers and party games",
        "Action-adventure",
        "Survival and horror",
        "Platformer",
        "Other",
    ];

    return arr;
};
export const  initialValues = async (supabase) => {
    const arr = [
        {
            id: "1",
            img: "../src/assets/predata/1.jpg",
            description: "Best trick for me :)",
            game: "FIFA 22",
            label: "Screenshots",
            genre: "Simulation and sports",
            comments: [
                {
                    text: "Wow, I love this game",
                },
                {
                    text: "Proud of U",
                },
            ],
        },
        {
            id: "2",
            img: "../src/assets/predata/2.jpg",
            description: "New village with friends",
            game: "Minecraft",
            label: "Share",
            genre: "Survival and horror",
            comments: [
                {
                    text: "Nice build",
                },
                {
                    text: "Need to do it",
                },
                {
                    text: "Excelent",
                },
            ],
        },
        {
            id: "3",
            img: "../src/assets/predata/3.png",
            description: "My new house",
            game: "Minecraft",
            label: "Share",
            genre: "Survival and horror",
            comments: [
                {
                    text: "Wow",
                },
                {
                    text: "Nice house, want to live there",
                },
            ],
        },
        {
            id: "4",
            img: "../src/assets/predata/4.webp",
            description: "Miss old LOL",
            game: "League of Legends",
            label: "Share",
            genre: "MOBA",
            comments: [
                {
                    text: "Yes, love it!",
                },
                {
                    text: "No, love the new one and hate it!",
                },
            ],
        },
        {
            id: "5",
            img: "../src/assets/predata/5.jpg",
            description: "With the tipical",
            game: "FIFA 22",
            label: "Share",
            genre: "Simulation and sports",
            comments: [
                {
                    text: "",
                },
            ],
        },
        {
            id: "6",
            img: "../src/assets/predata/6.jpg",
            description: "Meeting with the boys!",
            game: "Grand Theft Auto Online",
            label: "Just Share",
            genre: "Role-playing",
            comments: [
                {
                    text: "Nice one!",
                },
                {
                    text: "Excelent cars",
                },
            ],
        },
        {
            id: "7",
            img: "../src/assets/predata/7.png",
            description: "Ready for History mode",
            game: "Grand Theft Auto Online",
            label: "Just Share",
            genre: "Action-adventure",
            comments: [
                {
                    text: "Enjoy!",
                },
            ],
        },
        {
            id: "8",
            img: "../src/assets/predata/8.jpg",
            description: "Creating on beta",
            game: "Minecraft",
            label: "Just Share",
            genre: "Action-adventure",
            comments: [
                {
                    text: "Awesome!",
                },
                {
                    text: "Excelent look",
                },
            ],
        },
        {
            id: "9",
            img: "../src/assets/predata/11.jpg",
            description: "Finally!!!!!",
            game: "Tom Clancy's Rainbow Six: Siege",
            label: "Just Share",
            genre: "Other",
            comments: [
                {
                    text: "Congrats!!!",
                },
                {
                    text: "I want it T.T",
                },
            ],
        },
    ];

    const { error } = await supabase.from("publis").insert(arr);
            console.log(error);
    return arr;
};
