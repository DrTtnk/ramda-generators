/* eslint-disable no-unused-expressions */
import { expect }                      from "chai";
import { generateFromArray }           from "../src/generate";
import { periodicFrom }                from "../src/periodic";
import { splitEvery, splitEveryAsync } from "../src/splitEvery";
import { takeAll, takeAllAsync }       from "../src/takeAll";

describe("SplitEvery", () => {
    it("Take every N elements as array", () => {
        const stream = generateFromArray([1, 2, 3, 4, 5]);

        expect(takeAll(splitEvery(2, stream.start()))).to.deep.equal([[1, 2], [3, 4], [5]]);
        expect(takeAll(splitEvery(2)(stream.start()))).to.deep.equal([[1, 2], [3, 4], [5]]);
    });
});

describe("SplitEveryAsync", () => {
    it("Take every N elements as array", async () => {
        const stream = periodicFrom(0, [1, 2, 3, 4, 5]);

        expect(await takeAllAsync(splitEveryAsync(2, stream.start()))).to.deep.equal([[1, 2], [3, 4], [5]]);
        expect(await takeAllAsync(splitEveryAsync(2)(stream.start()))).to.deep.equal([[1, 2], [3, 4], [5]]);
    });
});
