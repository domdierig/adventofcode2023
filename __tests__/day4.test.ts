import { calcWinningPointsOfCard, getNumbersFromString } from '../src/day4/day4';

describe('day 4', () => {
	describe('get numbers', () => {
		test('case1', () => {
			const result = getNumbersFromString('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53');

			expect(result.myNumbers.length).toBe(5);
		});

		test('case2', () => {
			const result = getNumbersFromString('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53');

			expect(result.poolNumbers.length).toBe(8);
		});

		test('case3', () => {
			const result = getNumbersFromString('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53');

			expect(result.myNumbers[2]).toBe(83);
		});

		test('case4', () => {
			const result = getNumbersFromString('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53');

			expect(result.poolNumbers[2]).toBe(6);
		});
	});

	describe('calc points of card', () => {
		test('case1', () => {
			const card = getNumbersFromString('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53');
			const result = calcWinningPointsOfCard(card);

			expect(result).toBe(8);
		});
	});
});
