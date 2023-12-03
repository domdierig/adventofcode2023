export class NumberMatch {
    readonly value: number;
    readonly firstIndex: number;
    readonly lastIndex: number;
    readonly firstLookUpIndex: number;
    readonly lastLookUpIndex: number;
    readonly lineIndex: number;

    constructor(inputLength: number, value: number, firstIndex: number, lastIndex: number, lineIndex: number) {
        if (firstIndex === -1 || lastIndex === -1) {
            throw `cannot create NumberMatch object with fistIndex of ${firstIndex} and lastIndex of ${lastIndex}`;
        }

        this.value = value;
        this.firstIndex = firstIndex;
        this.lastIndex = lastIndex;
        this.firstLookUpIndex = this.firstIndex === 0 ? this.firstIndex : this.firstIndex - 1;
        this.lastLookUpIndex = this.lastIndex + 1 === inputLength ? this.lastIndex : this.lastIndex + 1;
        this.lineIndex = lineIndex;
    }
}
