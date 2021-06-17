/* eslint-disable no-unused-expressions */
import { expect }                    from "chai";
import { generateFromArray }         from "../src/generate";
import { periodicFrom }              from "../src/periodic";
import { takeAll, takeAllAsync }     from "../src/takeAll";
import { takeWhile, takeWhileAsync } from "../src/takeWhile";

describe("TakeWhile", () => {
    it("Take all the elements until the predicate is true", () => {
        const stream = generateFromArray([1, 2, 3, 4, 1, 2, 3, 4]);

        expect(takeAll(takeWhile(el => el < 4, stream.start()))).to.deep.equal([1, 2, 3]);
        expect(takeAll(takeWhile((el: number) => el < 4)(stream.start()))).to.deep.equal([1, 2, 3]);
    });
});

describe("TakeWhileAsync", () => {
    it("Take all the elements until the predicate is true", async () => {
        const stream = periodicFrom(0, [1, 2, 3, 4, 1, 2, 3, 4]);

        expect(await takeAllAsync(takeWhileAsync(el => el < 4, stream.start()))).to.deep.equal([1, 2, 3]);
        expect(await takeAllAsync(takeWhileAsync((el: number) => el < 4)(stream.start()))).to.deep.equal([1, 2, 3]);
    });
});
