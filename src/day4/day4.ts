import { Card } from './types';

const getNumbersFromString = (input: string): Card => {
	const result: Card = {
		count: 1,
		myNumbers: [],
		poolNumbers: [],
	};

	const splittedInput = input.split('|');
	const myNumbersString = splittedInput[0].split(':')[1];
	const numberRegex = /\d+/gm;

	const myNumbersMatches = myNumbersString.matchAll(numberRegex);
	const poolNumbersMatches = splittedInput[1].matchAll(numberRegex);

	for (const match of myNumbersMatches) {
		result.myNumbers.push(Number(match[0]));
	}

	for (const match of poolNumbersMatches) {
		result.poolNumbers.push(Number(match[0]));
	}

	return result;
};

const calcWinningPointsOfCard = (input: Card): number => {
	let result = 0;

	for (const myNumber of input.myNumbers) {
		for (const poolNumber of input.poolNumbers) {
			if (myNumber === poolNumber) {
				if (result === 0) {
					result = 1;
				} else {
					result = result * 2;
				}
				break;
			}
		}
	}

	return result;
};

const calcAllWinningPoints = (input: string[]): void => {
	let result = 0;
	let countOfCards = 0;

	const allCards: Card[] = [];

	input.forEach((i, index) => {
		const card = getNumbersFromString(i);
		allCards.push(card);

		result += calcWinningPointsOfCard(card);
	});

	allCards.forEach((card, index) => {
		const winningPoints = calcWinningPointsOfCard(card);

		countOfCards += card.count;

		increaseCardCount(allCards, index, winningPoints);
	});

	let result2 = 0;
	allCards.forEach((card, index) => {
		result2 += card.count;
	});

	console.log(`winning points sum is: ${result}, number of cards is ${result2}`);
};

const increaseCardCount = (allCards: Card[], currentIndex: number, numberOfCardsToIncrease: number) => {
	const currentCard = allCards[currentIndex];

	for (let i = currentIndex + 1; i <= currentIndex + numberOfCardsToIncrease; i++) {
		console.log(i);

		allCards[i].count += currentCard.count;
	}
};

export { getNumbersFromString, calcWinningPointsOfCard, calcAllWinningPoints };
