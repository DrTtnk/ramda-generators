/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { generateFromArray }     from "../src/generate";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";
import { zipWith, zipWithAsync } from "../src/zipWith";

describe("ZipWith", () => {
    it("Zip two stream based on the predicate", () => {
        const stream1 = generateFromArray([1, 2, 3]);
        const stream2 = generateFromArray(["a", "b", "c"]);

        expect(takeAll(zipWith((n, s) => n.toString() + s, stream1.start(), stream2.start())))
            .to.deep.equal(["1a", "2b", "3c"]);
        expect(takeAll(zipWith((n: number, s: string) => n.toString() + s)(stream1.start(), stream2.start())))
            .to.deep.equal(["1a", "2b", "3c"]);
        expect(takeAll(zipWith((n, s) => n.toString() + s, stream1.start())(stream2.start())))
            .to.deep.equal(["1a", "2b", "3c"]);
        expect(takeAll(zipWith((n: number, s: string) => n.toString() + s)(stream1.start())(stream2.start())))
            .to.deep.equal(["1a", "2b", "3c"]);
    });
});

describe("ZipWithAsync", () => {
    it("Zip two stream based on the predicate", async () => {
        const s1 = periodicFrom(0, [1, 2, 3]);
        const s2 = periodicFrom(10, ["a", "b", "c"]);

        expect(await takeAllAsync(zipWithAsync((n, s) => n.toString() + s, s1.start(), s2.start())))
            .to.deep.equal(["1a", "2b", "3c"]);
        expect(await takeAllAsync(zipWithAsync((n: number, s: string) => n.toString() + s)(s1.start(), s2.start())))
            .to.deep.equal(["1a", "2b", "3c"]);
        expect(await takeAllAsync(zipWithAsync((n, s) => n.toString() + s, s1.start())(s2.start())))
            .to.deep.equal(["1a", "2b", "3c"]);
        expect(await takeAllAsync(zipWithAsync((n: number, s: string) => n.toString() + s)(s1.start())(s2.start())))
            .to.deep.equal(["1a", "2b", "3c"]);
    });
});
