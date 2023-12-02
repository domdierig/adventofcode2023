import { addUppTwoDigitNumbersFromInput } from './day1/day1';
import { countImpossibleGameIDs } from './day2/day2';
import { readInput } from './readInput';

const result = countImpossibleGameIDs(readInput('day2'));
console.log(result);
