/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { drop, dropAsync }       from "../src/drop";
import { generateFromArray }     from "../src/generate";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";

describe("Drop", () => {
    it("Removes the first N elements", () => {
        const stream = generateFromArray([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);

        expect(takeAll(drop(2, stream.start()))).to.deep.equal([{ id: 3 }]);
        expect(takeAll(drop(2)(stream.start()))).to.deep.equal([{ id: 3 }]);
    });
});

describe("DropAsync", () => {
    it("Removes the first N elements", async () => {
        const stream = periodicFrom(0, [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);

        expect(await takeAllAsync(dropAsync(2, stream.start()))).to.deep.equal([{ id: 3 }]);
        expect(await takeAllAsync(dropAsync(2)(stream.start()))).to.deep.equal([{ id: 3 }]);
    });
});
