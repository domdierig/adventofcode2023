import { NumberMatch } from './NumberMatch';

export class GearMap {
    private map: { [key: string]: NumberMatch[] };

    constructor() {
        this.map = {};
    }

    add(lineIndex: number, symbolIndex: number, numberMatch: NumberMatch): void {
        const key = `${lineIndex}-${symbolIndex}`;

        if (!this.map[key]) {
            this.map[key] = [];
        }

        this.map[key].push(numberMatch);
    }

    getGearRationSum(): number {
        let sum = 0;

        for (const key in this.map) {
            if (this.map[key].length === 2) {
                sum += this.map[key][0].value * this.map[key][1].value;
            }
        }

        return sum;
    }
}
