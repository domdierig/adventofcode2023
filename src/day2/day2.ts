import { Game, GameSet, GamesResult } from './types';

const readInGame = (input: string): Game => {
    const gameStringSplitted = input.split(':');
    const gameID = gameStringSplitted[0].split(' ')[1];

    const gameSetStrings = gameStringSplitted[1].split(';');

    const result: Game = {
        ID: Number(gameID),
        sets: [],
        minRed: 0,
        minBlue: 0,
        minGreen: 0,
        power: 0,
    };

    for (const gameSetString of gameSetStrings) {
        const setSplitted = gameSetString.split(',');

        const gameSet: GameSet = {
            blue: 0,
            red: 0,
            green: 0,
        };

        for (const setSplit of setSplitted) {
            const setSplitSplitted = setSplit.trim().split(' ');

            if (setSplitSplitted[1].toLowerCase() === 'red') {
                gameSet.red = Number(setSplitSplitted[0]);
                if (gameSet.red > result.minRed) {
                    result.minRed = gameSet.red;
                }
            }
            if (setSplitSplitted[1].toLowerCase() === 'blue') {
                gameSet.blue = Number(setSplitSplitted[0]);
                if (gameSet.blue > result.minBlue) {
                    result.minBlue = gameSet.blue;
                }
            }
            if (setSplitSplitted[1].toLowerCase() === 'green') {
                gameSet.green = Number(setSplitSplitted[0]);
                if (gameSet.green > result.minGreen) {
                    result.minGreen = gameSet.green;
                }
            }
        }

        result.sets.push(gameSet);
    }

    result.power = result.minBlue * result.minGreen * result.minRed;

    return result;
};

const isGamePossible = (game: Game, red: number, blue: number, green: number): boolean => {
    for (const set of game.sets) {
        if (set.red > red || set.blue > blue || set.green > green) {
            return false;
        }
    }
    return true;
};

const countImpossibleGameIDs = (input: string[]): GamesResult => {
    let result: GamesResult = {
        sumOfPossibleGameIDs: 0,
        sumOfPower: 0,
    };

    for (const i of input) {
        const game = readInGame(i);

        result.sumOfPossibleGameIDs += isGamePossible(game, 12, 14, 13) ? game.ID : 0;
        result.sumOfPower += game.power;
    }

    return result;
};

export { readInGame, isGamePossible, countImpossibleGameIDs };
