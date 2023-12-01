import { addUppTwoDigitNumbersFromInput, findTwoDigitNumber, translate } from '../src/day1/day1';

describe('day 1', () => {
	describe('find two number digits', () => {
		test('case1', () => {
			const result = findTwoDigitNumber('1abc2');
			expect(result).toBe(12);
		});

		test('case2', () => {
			const result = findTwoDigitNumber('pqr3stu8vwx');
			expect(result).toBe(38);
		});

		test('case3', () => {
			const result = findTwoDigitNumber('a1b2c3d4e5f');
			expect(result).toBe(15);
		});

		test('case4', () => {
			const result = findTwoDigitNumber('treb7uchet');
			expect(result).toBe(77);
		});

		test('case5', () => {
			const result = findTwoDigitNumber('two1nine');
			expect(result).toBe(29);
		});

		test('case6', () => {
			const result = findTwoDigitNumber('eightwothree');
			expect(result).toBe(83);
		});

		test('case7', () => {
			const result = findTwoDigitNumber('abcone2threexyz');
			expect(result).toBe(13);
		});

		test('case8', () => {
			const result = findTwoDigitNumber('xtwone3four');
			expect(result).toBe(24);
		});

		test('case9', () => {
			const result = findTwoDigitNumber('4nineeightseven2');
			expect(result).toBe(42);
		});

		test('case10', () => {
			const result = findTwoDigitNumber('zoneight234');
			expect(result).toBe(14);
		});

		test('case11', () => {
			const result = findTwoDigitNumber('7pqrstsixteen');
			expect(result).toBe(76);
		});

		test('case12', () => {
			const result = findTwoDigitNumber('9sixonefour');
			expect(result).toBe(94);
		});

		test('case13', () => {
			const result = findTwoDigitNumber('eighthree');
			expect(result).toBe(83);
		});
	});

	describe('translate', () => {
		test('case 1', () => {
			const result = translate('one');
			expect(result).toBe('1');
		});

		test('case 2', () => {
			const result = translate('two');
			expect(result).toBe('2');
		});

		test('case 3', () => {
			const result = translate('three');
			expect(result).toBe('3');
		});

		test('case 4', () => {
			const result = translate('four');
			expect(result).toBe('4');
		});

		test('case 5', () => {
			const result = translate('five');
			expect(result).toBe('5');
		});

		test('case 6', () => {
			const result = translate('six');
			expect(result).toBe('6');
		});

		test('case 7', () => {
			const result = translate('seven');
			expect(result).toBe('7');
		});

		test('case 8', () => {
			const result = translate('eight');
			expect(result).toBe('8');
		});

		test('case 9', () => {
			const result = translate('nine');
			expect(result).toBe('9');
		});

		test('case 10', () => {
			const result = translate('1');
			expect(result).toBe('1');
		});
	});

	describe('addUppTwoDigitNumbersFromInput', () => {
		test('case1', () => {
			const result = addUppTwoDigitNumbersFromInput([
				'two1nine',
				'eightwothree',
				'abcone2threexyz',
				'xtwone3four',
				'4nineeightseven2',
				'zoneight234',
				'7pqrstsixteen',
			]);
			expect(result).toBe(281);
		});
	});
});
