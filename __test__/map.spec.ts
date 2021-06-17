/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { generateFromArray }     from "../src/generate";
import { map, mapAsync }         from "../src/map";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";

describe("Map", () => {
    it("Map the elements based on the predicate", () => {
        const stream = generateFromArray([1, 2, 3]);

        expect(takeAll(map(el => el * 2, stream.start()))).to.deep.equal([2, 4, 6]);
        expect(takeAll(map((el: number) => el * 2)(stream.start()))).to.deep.equal([2, 4, 6]);
    });
});

describe("MapAsync", () => {
    it("Map the elements based on the predicate", async () => {
        const stream = periodicFrom(0, [1, 2, 3]);

        expect(await takeAllAsync(mapAsync(el => el * 2, stream.start()))).to.deep.equal([2, 4, 6]);

        const mapAsync1 = mapAsync((el: number) => el * 2);
        expect(await takeAllAsync(mapAsync1(stream.start()))).to.deep.equal([2, 4, 6]);
    });
});
