/* eslint-disable no-unused-expressions */
import { expect }                  from "chai";
import { debounce, debounceAsync } from "../src/debounce";
import { generateFromArray }       from "../src/generate";
import { periodicFrom }            from "../src/periodic";
import { takeAll, takeAllAsync }   from "../src/takeAll";

describe("Debounce", () => {
    it("Removes continuous duplicates", () => {
        const stream = generateFromArray([1, 1, 2, 2, 3, 3]);
        expect(takeAll(debounce(stream.start()))).to.deep.equal([1, 2, 3]);
    });
});

describe("Debounce async", () => {
    it("Removes continuous duplicates", async () => {
        const stream = periodicFrom(0, [1, 1, 2, 2, 3, 3]);
        expect(await takeAllAsync(debounceAsync(stream.start()))).to.deep.equal([1, 2, 3]);
    });
});
