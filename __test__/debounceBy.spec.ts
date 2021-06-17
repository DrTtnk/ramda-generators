/* eslint-disable no-unused-expressions */
import { expect }                      from "chai";
import R                               from "ramda";
import { debounceBy, debounceByAsync } from "../src/debounceBy";
import { generateFromArray }           from "../src/generate";
import { periodicFrom }                from "../src/periodic";
import { takeAll, takeAllAsync }       from "../src/takeAll";

describe("DebounceBy", () => {
    it("Removes continuous duplicates", () => {
        const stream = generateFromArray([
            { id: 1 },
            { id: 1 },
            { id: 2 },
            { id: 2 },
            { id: 3 },
            { id: 3 },
        ]);

        expect(takeAll(debounceBy(R.prop("id"), stream.start()))).to.deep.equal([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);
        expect(takeAll(debounceBy(R.prop("id"))(stream.start()))).to.deep.equal([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);
    });
});

describe("DebounceByAsync", () => {
    it("Removes continuous duplicates", async () => {
        const stream = periodicFrom(0, [
            { id: 1 },
            { id: 1 },
            { id: 2 },
            { id: 2 },
            { id: 3 },
            { id: 3 },
        ]);

        expect(await takeAllAsync(debounceByAsync(R.prop("id"), stream.start()))).to.deep.equal([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);
        expect(await takeAllAsync(debounceByAsync(R.prop("id"))(stream.start()))).to.deep.equal([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);
    });
});
