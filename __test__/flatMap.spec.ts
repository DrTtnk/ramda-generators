/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { flatMap, flatMapAsync } from "../src/flatMap";
import { generateFromArray }     from "../src/generate";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";

describe("FlatMap", () => {
    it("Flattens the generator of array in another generator", () => {
        const stream = generateFromArray([1, 2, 3]);

        expect(takeAll(flatMap((x: number) => ([x, x]), stream.start()))).to.deep.equal([1, 1, 2, 2, 3, 3]);
        expect(takeAll(flatMap((x: number) => ([x, x]))(stream.start()))).to.deep.equal([1, 1, 2, 2, 3, 3]);
    });
});

describe("FlatMapAsync", () => {
    it("Flattens the generator of array in another generator", async () => {
        const stream = periodicFrom(0, [1, 2, 3]);

        expect(await takeAllAsync(flatMapAsync((x: number) => ([x, x]), stream.start())))
            .to.deep.equal([1, 1, 2, 2, 3, 3]);
        expect(await takeAllAsync(flatMapAsync((x: number) => ([x, x]))(stream.start())))
            .to.deep.equal([1, 1, 2, 2, 3, 3]);
    });
});
