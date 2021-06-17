/* eslint-disable no-unused-expressions */
import { expect }                 from "chai";
import { generate }               from "../src/generate";
import { periodic, periodicFrom } from "../src/periodic";
import { takeAllAsync }           from "../src/takeAll";
import { takeAsync }              from "../src/take";

describe("Periodic", () => {
    it("Generates elements every N milliseconds", async () => {
        expect(await takeAsync(3, periodic(1).start())).to.deep.equal([null, null, null]);
    });
});

describe("PeriodicFrom", () => {
    it("Generates elements every N milliseconds from an array", async () => {
        expect(await takeAllAsync(periodicFrom(0, [1, 2, 3]).start())).to.deep.equal([1, 2, 3]);
        expect(await takeAllAsync(periodicFrom(0)([1, 2, 3]).start())).to.deep.equal([1, 2, 3]);
    });
    it("Generates elements every N milliseconds from a function", async () => {
        expect(await takeAsync(3, periodicFrom(0, () => 10).start())).to.deep.equal([10, 10, 10]);
        expect(await takeAsync(3, periodicFrom(0)(() => 10).start())).to.deep.equal([10, 10, 10]);
    });
    it("Generates elements every N milliseconds from another stream", async () => {
        expect(await takeAsync(3, periodicFrom(0, generate(id => id * 2)).start())).to.deep.equal([0, 2, 4]);
        expect(await takeAsync(3, periodicFrom(0)(generate(id => id * 2)).start())).to.deep.equal([0, 2, 4]);
    });
    it("Generates elements every N milliseconds from another asynchronous stream", async () => {
        expect(await takeAsync(3, periodicFrom(0, generate(id => Promise.resolve(id * 2)))
            .start())).to.deep.equal([0, 2, 4]);
        expect(await takeAsync(3, periodicFrom(0)(generate(id => Promise.resolve(id * 2)))
            .start())).to.deep.equal([0, 2, 4]);
    });
});
