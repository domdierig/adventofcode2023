// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..

import {
    createLines,
    createMatrixFromInput,
    findAllNumbers,
    findNumbersInLine,
    getLinesToCheck,
    isSymbolAGear,
    lineToArray,
    symbolIsNumberOrDot,
} from '../src/day3/day3';

describe('day3', () => {
    const input = [
        '467..114..',
        '...*......',
        '..35..633.',
        '......#...',
        '617*......',
        '.....+.58.',
        '..592.....',
        '......755.',
        '...$.*....',
        '.664.598..',
    ];

    describe('is symbol a gear', () => {
        test('case1', () => {
            const result = isSymbolAGear('*');
            expect(result).toBe(true);
        });

        test('case2', () => {
            const result = isSymbolAGear('.');
            expect(result).toBe(false);
        });
    });

    describe('line to array function', () => {
        test('case1', () => {
            const result = lineToArray('467..114..');
            expect(result.length).toBe(10);
        });
    });

    describe('create matrix', () => {
        test('case1', () => {
            const result = createMatrixFromInput(input);
            expect(result.length).toBe(input.length + 2);
        });

        test('case2', () => {
            const result = createMatrixFromInput(input);
            expect(result[1].length).toBe(10);
        });
    });

    describe('find position of number', () => {
        test('case1', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result.length).toBe(2);
        });

        test('case2', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result[0].firstIndex).toBe(0);
        });

        test('case3', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result[0].firstLookUpIndex).toBe(0);
        });

        test('case4', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result[0].lastIndex).toBe(2);
        });

        test('case5', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result[0].lastLookUpIndex).toBe(3);
        });

        test('case6', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result[1].firstIndex).toBe(5);
        });

        test('case7', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result[1].firstLookUpIndex).toBe(4);
        });

        test('case8', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result[1].lastIndex).toBe(7);
        });

        test('case9', () => {
            const result = findNumbersInLine('467..114..', 0);
            expect(result[1].lastLookUpIndex).toBe(8);
        });

        test('case10', () => {
            const result = findNumbersInLine('467...4545', 0);
            expect(result[1].lastLookUpIndex).toBe(9);
        });
    });

    describe('check if number touches symbol', () => {});

    describe('find all numbers', () => {
        test('case1', () => {
            const result = findAllNumbers(input);
            expect(result.length).toBe(10);
        });
    });

    describe('get lines to check', () => {
        test('case1', () => {
            const result = getLinesToCheck(createLines(input), 0);
            expect(result.length).toBe(2);
        });

        test('case2', () => {
            const result = getLinesToCheck(createLines(input), 0);
            expect(result[1].content).toBe('...*......');
        });

        test('case3', () => {
            const result = getLinesToCheck(createLines(input), 0);
            expect(result[0].content).toBe('467..114..');
        });

        test('case4', () => {
            const result = getLinesToCheck(createLines(input), 9);
            expect(result.length).toBe(2);
        });

        test('case5', () => {
            const result = getLinesToCheck(createLines(input), 9);
            expect(result[0].content).toBe('...$.*....');
        });

        test('case6', () => {
            const result = getLinesToCheck(createLines(input), 9);
            expect(result[1].content).toBe('.664.598..');
        });

        test('case7', () => {
            const result = getLinesToCheck(createLines(input), 5);
            expect(result.length).toBe(3);
        });

        test('case8', () => {
            const result = getLinesToCheck(createLines(input), 5);
            expect(result[0].content).toBe('617*......');
        });

        test('case9', () => {
            const result = getLinesToCheck(createLines(input), 5);
            expect(result[1].content).toBe('.....+.58.');
        });

        test('case10', () => {
            const result = getLinesToCheck(createLines(input), 5);
            expect(result[2].content).toBe('..592.....');
        });
    });

    describe('check if symbol is not number or dot', () => {
        test('case1', () => {
            expect(symbolIsNumberOrDot('.')).toBe(true);
        });

        test('case2', () => {
            expect(symbolIsNumberOrDot('3')).toBe(true);
        });

        test('case3', () => {
            expect(symbolIsNumberOrDot('+')).toBe(false);
        });
    });
});
