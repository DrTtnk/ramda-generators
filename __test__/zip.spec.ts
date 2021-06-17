/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { generateFromArray }     from "../src/generate";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";
import { zip, zipAsync }         from "../src/zip";

describe("Zip", () => {
    it("Zip two streams", () => {
        const stream1 = generateFromArray([1, 2, 3]);
        const stream2 = generateFromArray(["a", "b", "c"]);

        expect(takeAll(zip(stream1.start(), stream2.start()))).to.deep.equal([[1, "a"], [2, "b"], [3, "c"]]);
        expect(takeAll(zip(stream1.start())(stream2.start()))).to.deep.equal([[1, "a"], [2, "b"], [3, "c"]]);
    });
});

describe("ZipAsync", () => {
    it("Zip two streams", async () => {
        const stream1 = periodicFrom(0, [1, 2, 3]);
        const stream2 = periodicFrom(10, ["a", "b", "c"]);

        expect(await takeAllAsync(zipAsync(stream1.start(), stream2.start())))
            .to.deep.equal([[1, "a"], [2, "b"], [3, "c"]]);
        expect(await takeAllAsync(zipAsync(stream1.start())(stream2.start())))
            .to.deep.equal([[1, "a"], [2, "b"], [3, "c"]]);
    });
});
