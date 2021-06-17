/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { generateFromArray }     from "../src/generate";
import { periodicFrom }          from "../src/periodic";
import { scan, scanAsync }       from "../src/scan";
import { takeAll, takeAllAsync } from "../src/takeAll";

const add = (a: number, b: number) => a + b;

describe("Scan", () => {
    it("Scan the elements based on the predicate", () => {
        const stream = generateFromArray([1, 2, 3]);

        expect(takeAll(scan(add, 0, stream.start()))).to.deep.equal([1, 3, 6]);
        expect(takeAll(scan(add)(0, stream.start()))).to.deep.equal([1, 3, 6]);
        expect(takeAll(scan(add, 0)(stream.start()))).to.deep.equal([1, 3, 6]);
        expect(takeAll(scan(add)(0)(stream.start()))).to.deep.equal([1, 3, 6]);
    });
});

describe("ScanAsync", () => {
    it("Scan the elements based on the predicate", async () => {
        const stream = periodicFrom(0, [1, 2, 3]);

        expect(await takeAllAsync(scanAsync(add, 0, stream.start()))).to.deep.equal([1, 3, 6]);
        expect(await takeAllAsync(scanAsync(add)(0, stream.start()))).to.deep.equal([1, 3, 6]);
        expect(await takeAllAsync(scanAsync(add, 0)(stream.start()))).to.deep.equal([1, 3, 6]);
        expect(await takeAllAsync(scanAsync(add)(0)(stream.start()))).to.deep.equal([1, 3, 6]);
    });
});
