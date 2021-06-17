/* eslint-disable no-unused-expressions */
import { expect }            from "chai";
import { generateFromArray } from "../src/generate";
import { head, headAsync }   from "../src/head";
import { periodicFrom }      from "../src/periodic";

describe("Head", () => {
    it("Takes only the first elements", () => {
        const stream = generateFromArray([1, 2, 3]);
        expect(head(stream.start())).to.equal(1);
    });

    it("Returns undefined with empty generators", () => {
        const stream = generateFromArray([]);
        expect(head(stream.start())).to.equal(undefined);
    });
});

describe("HeadAsync", () => {
    it("Takes only the first elements", async () => {
        const stream = periodicFrom(0, [1, 2, 3]);
        expect(await headAsync(stream.start())).to.equal(1);
    });

    it("Returns undefined with empty generators", async () => {
        const stream = periodicFrom(0, []);
        expect(await headAsync(stream.start())).to.equal(undefined);
    });
});
