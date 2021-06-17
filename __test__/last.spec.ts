/* eslint-disable no-unused-expressions */
import { expect }            from "chai";
import { generateFromArray } from "../src/generate";
import { last, lastAsync }   from "../src/last";
import { periodicFrom }      from "../src/periodic";

describe("Last", () => {
    it("Takes only the last elements", () => {
        const stream = generateFromArray([1, 2, 3]);
        expect(last(stream.start())).to.equal(3);
    });

    it("Returns undefined with empty generators", () => {
        const stream = generateFromArray([]);
        expect(last(stream.start())).to.equal(undefined);
    });
});

describe("LastAsync", () => {
    it("Takes only the last elements", async () => {
        const stream = periodicFrom(0, [1, 2, 3]);
        expect(await lastAsync(stream.start())).to.equal(3);
    });

    it("Returns undefined with empty generators", async () => {
        const stream = periodicFrom(0, []);
        expect(await lastAsync(stream.start())).to.equal(undefined);
    });
});
