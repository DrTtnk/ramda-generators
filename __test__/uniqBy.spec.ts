/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import R                         from "ramda";
import { generateFromArray }     from "../src/generate";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";
import { uniqBy, uniqByAsync }   from "../src/uniqBy";

describe("UniqBy", () => {
    it("Returns only the unique elements based on the predicate", () => {
        const stream = generateFromArray([1, 2, 3, 1, 2, 3, 1, 2, 3]);

        expect(takeAll(uniqBy(R.identity, stream.start()))).to.deep.equal([1, 2, 3]);
        expect(takeAll(uniqBy(R.identity)(stream.start()))).to.deep.equal([1, 2, 3]);
    });
});

describe("UniqByAsync", () => {
    it("Returns only the unique elements based on the predicate", async () => {
        const stream = periodicFrom(0, [1, 2, 3, 1, 2, 3, 1, 2, 3]);

        expect(await takeAllAsync(uniqByAsync(R.identity, stream.start()))).to.deep.equal([1, 2, 3]);
        expect(await takeAllAsync(uniqByAsync(R.identity)(stream.start()))).to.deep.equal([1, 2, 3]);
    });
});
