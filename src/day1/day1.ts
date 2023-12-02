const findTwoDigitNumber = (input: string): number => {
    const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gm;
    const matches = input.matchAll(regex);

    const matchesArray: string[] = [];

    for (const match of matches) {
        const matchValue = match.at(1);

        if (!matchValue) {
            console.error(match);
            throw 'no match value found';
        }

        matchesArray.push(matchValue);
    }

    const first = matchesArray[0];
    const last = matchesArray[matchesArray.length - 1];

    const result = `${translate(first)}${translate(last)}`;

    return Number(result);
};

const addUppTwoDigitNumbersFromInput = (input: string[]): number => {
    let result = 0;

    for (const i of input) {
        result += findTwoDigitNumber(i);
    }

    return result;
};

const digitsMap: { [key: string]: string } = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
};

const translate = (input: string): string => {
    return digitsMap[input] ? digitsMap[input] : input;
};

export { findTwoDigitNumber, addUppTwoDigitNumbersFromInput, translate };
