import { Game } from '../src/day2/types';
import { isGamePossible, readInGame } from '../src/day2/day2';

describe('day2', () => {
    describe('read in games', () => {
        test('case1', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.ID).toBe(1);
        });

        test('case2', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.sets.length).toBe(3);
        });

        test('case3', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.sets[0].blue).toBe(3);
        });

        test('case4', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.sets[0].red).toBe(4);
        });

        test('case5', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.sets[1].green).toBe(2);
        });

        test('case6', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.sets[1].red).toBe(1);
        });

        test('case7', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.sets[1].blue).toBe(6);
        });

        test('case8', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.sets[2].green).toBe(2);
        });

        test('case9', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.minRed).toBe(4);
        });

        test('case9', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.minBlue).toBe(6);
        });

        test('case9', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.minGreen).toBe(2);
        });

        test('case10', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            expect(game.power).toBe(48);
        });
    });

    describe('check if game is possible', () => {
        test('case1', () => {
            const game: Game = readInGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
            const possible = isGamePossible(game, 12, 14, 13);
            expect(possible).toBe(true);
        });

        test('case2', () => {
            const game: Game = readInGame('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red');
            const possible = isGamePossible(game, 12, 14, 13);
            expect(possible).toBe(false);
        });

        test('case3', () => {
            const game: Game = readInGame('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red');
            const possible = isGamePossible(game, 12, 14, 13);
            expect(possible).toBe(false);
        });
    });
});
