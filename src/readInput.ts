import fs from 'fs';

const readInput = (day: string): string[] => {
	const input = fs.readFileSync(`./input/${day}.txt`).toString();
	return input.split('\n');
};

export { readInput };
