export type Game = {
    ID: number;
    sets: GameSet[];
    minRed: number;
    minGreen: number;
    minBlue: number;
    power: number;
};

export type GameSet = {
    blue: number;
    red: number;
    green: number;
};

export type GamesResult = {
    sumOfPossibleGameIDs: number;
    sumOfPower: number;
};
