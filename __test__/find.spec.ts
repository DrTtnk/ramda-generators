/* eslint-disable no-unused-expressions */
import { expect }            from "chai";
import { find, findAsync }   from "../src/find";
import { generateFromArray } from "../src/generate";
import { periodicFrom }      from "../src/periodic";

describe("Find", () => {
    it("Return the first elements that matches the predicate", () => {
        const stream = generateFromArray([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);

        expect(find((el: { id: number }) => el.id === 2, stream.start())).to.deep.equal({ id: 2 });
        expect(find((el: { id: number }) => el.id === 2)(stream.start())).to.deep.equal({ id: 2 });
    });

    it("Return null if nothing is found", () => {
        const stream = generateFromArray([]);

        expect(find((el: { id: number }) => el.id === 22, stream.start())).to.equal(null);
        expect(find((el: { id: number }) => el.id === 22)(stream.start())).to.equal(null);
    });
});

describe("FindAsync", () => {
    it("Return the first elements that matches the predicate", async () => {
        const stream = periodicFrom(0, [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);

        expect(await findAsync((el: { id: number }) => el.id === 2, stream.start()))
            .to.deep.equal({ id: 2 });
        expect(await findAsync((el: { id: number }) => el.id === 2)(stream.start()))
            .to.deep.equal({ id: 2 });
    });

    it("Return null if nothing is found", async () => {
        const stream = periodicFrom(0, []);

        expect(await findAsync((el: { id: number }) => el.id === 22, stream.start())).to.equal(null);
        expect(await findAsync((el: { id: number }) => el.id === 22)(stream.start())).to.equal(null);
    });
});
