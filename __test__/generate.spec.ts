/* eslint-disable no-unused-expressions */
import { expect }                                     from "chai";
import { generateFromArray, generate, generateAsync } from "../src/generate";
import { takeAll, takeAllAsync }                      from "../src/takeAll";
import { take, takeAsync }                            from "../src/take";

describe("generateFromArray", () => {
    it("Converts an array to a stream", () => {
        expect(takeAll(generateFromArray([1, 2, 3]).start())).to.deep.equal([1, 2, 3]);
    });
});

describe("generate", () => {
    it("Generates a stream of values from a function", () => {
        const stream = generate(id => id * 2);
        expect(take(3, stream.start())).to.deep.equal([0, 2, 4]);
    });

    it("Generates a stream of values from an async function", async () => {
        const stream = generateAsync(id => Promise.resolve(id * 2));
        expect(await takeAsync(3, stream.start())).to.deep.equal([0, 2, 4]);
    });

    it("Generates a stream of N values from a function", () => {
        const stream = generate(id => id * 2, 3);
        expect(takeAll(stream.start())).to.deep.equal([0, 2, 4]);
    });

    it("Generates a stream of N values from an async function", async () => {
        const stream = generateAsync(id => Promise.resolve(id * 2), 3);
        expect(await takeAllAsync(stream.start())).to.deep.equal([0, 2, 4]);
    });
});
