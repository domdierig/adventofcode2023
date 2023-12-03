import { NumberMatch } from './NumberMatch';
import { GearMap } from './gearMap';
import { Line } from './types';

const lineToArray = (line: string): string[] => {
    return line.split('');
};

const createMatrixFromInput = (input: string[]): string[][] => {
    const result: string[][] = [];

    let extraLine: string[] = [];

    for (let i = 0; i < input[0].length; i++) {
        extraLine.push('.');
    }

    result.push(extraLine);

    for (const i of input) {
        result.push(lineToArray(i));
    }

    result.push(extraLine);

    return result;
};

const findNumbersInLine = (line: string, lineIndex: number): NumberMatch[] => {
    const regex = /\d+/gm;

    const matches = line.matchAll(regex);

    const result: NumberMatch[] = [];

    for (const match of matches) {
        const numberMatch = new NumberMatch(
            line.length,
            Number(match[0]),
            match.index !== undefined ? match.index : -1,
            match.index !== undefined ? match.index + match[0].length - 1 : -1,
            lineIndex,
        );

        result.push(numberMatch);
    }

    return result;
};

const getLinesToCheck = (input: Line[], lineIndexOfFoundNumber: number): Line[] => {
    const result: Line[] = [];

    if (lineIndexOfFoundNumber !== 0) {
        result.push(input[lineIndexOfFoundNumber - 1]);
    }

    result.push(input[lineIndexOfFoundNumber]);

    if (lineIndexOfFoundNumber + 1 !== input.length) {
        result.push(input[lineIndexOfFoundNumber + 1]);
    }

    return result;
};

const symbolIsNumberOrDot = (input: string): boolean => {
    if (input.length > 1) {
        throw `cannot compute input ${input}`;
    }

    if (input === '.' || !Number.isNaN(Number(input))) {
        return true;
    }

    return false;
};

const isSymbolAGear = (input: string): boolean => {
    if (input.length > 1) {
        throw `cannot compute input ${input}`;
    }

    if (input === '*') {
        return true;
    }

    return false;
};

const findAllNumbers = (input: string[]): NumberMatch[] => {
    let result: NumberMatch[] = [];

    for (let index = 0; index < input.length; index++) {
        const lineMatches = findNumbersInLine(input[index], index);
        result = result.concat(lineMatches);
    }

    return result;
};

const createLines = (input: string[]): Line[] => {
    const result: Line[] = [];

    for (let i = 0; i < input.length; i++) {
        result.push({
            index: i,
            content: input[i],
        });
    }

    return result;
};

const countNumbersThatTouchesSymbol = (input: string[]): void => {
    const lines: Line[] = createLines(input);

    let result: number = 0;
    const gearMap = new GearMap();

    const allFoundNumbers = findAllNumbers(input);

    for (const foundNumber of allFoundNumbers) {
        const linesToCheck = getLinesToCheck(lines, foundNumber.lineIndex);

        for (const line of linesToCheck) {
            let touch = false;
            const splittedLine = line.content.split('');
            for (let index = foundNumber.firstLookUpIndex; index <= foundNumber.lastLookUpIndex; index++) {
                if (!symbolIsNumberOrDot(splittedLine[index])) {
                    if (isSymbolAGear(splittedLine[index])) {
                        gearMap.add(line.index, index, foundNumber);
                    }
                    result += foundNumber.value;
                    touch = true;
                    break;
                }
            }
            if (touch) {
                break;
            }
        }
    }

    console.log(`sum of numbers that touches a symbold: ${result}, sum of gear rations: ${gearMap.getGearRationSum()}`);
};

export {
    findAllNumbers,
    lineToArray,
    createMatrixFromInput,
    findNumbersInLine,
    getLinesToCheck,
    symbolIsNumberOrDot,
    countNumbersThatTouchesSymbol,
    isSymbolAGear,
    createLines,
};
