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
    return arr = [
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
        "Other"
    ];
};
