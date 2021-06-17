/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { generateFromArray }     from "../src/generate";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";
import {
    take,
    takeAsync,
    takeAsyncIterator,
    takeIterator,
} from "../src/take";

describe("Take", () => {
    it("Take N elements as array", () => {
        const stream = generateFromArray([1, 2, 3]);

        expect(take(2, stream.start())).to.deep.equal([1, 2]);
        expect(take(2)(stream.start())).to.deep.equal([1, 2]);
    });
});

describe("TakeAsync", () => {
    it("Take N elements as array", async () => {
        const stream = periodicFrom(0, [1, 2, 3]);

        expect(await takeAsync(2, stream.start())).to.deep.equal([1, 2]);
        expect(await takeAsync(2)(stream.start())).to.deep.equal([1, 2]);
    });
});

describe("TakeIterator", () => {
    it("Take N elements as iterator", () => {
        const stream = generateFromArray([1, 2, 3]);

        expect(takeAll(takeIterator(2, stream.start()))).to.deep.equal([1, 2]);
        expect(takeAll(takeIterator(2)(stream.start()))).to.deep.equal([1, 2]);
    });
});

describe("TakeAsyncIterator", () => {
    it("Take N elements as iterator", async () => {
        const stream = periodicFrom(0, [1, 2, 3]);

        expect(await takeAllAsync(takeAsyncIterator(2, stream.start()))).to.deep.equal([1, 2]);
        expect(await takeAllAsync(takeAsyncIterator(2)(stream.start()))).to.deep.equal([1, 2]);
    });
});
