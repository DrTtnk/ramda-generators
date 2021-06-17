/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { filter, filterAsync }   from "../src/filter";
import { generateFromArray }     from "../src/generate";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";

describe("Filter", () => {
    it("Removes the elements based on the predicate", () => {
        const stream = generateFromArray([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);

        expect(takeAll(filter((el: {id: number}) => el.id % 2 === 0, stream.start()))).to.deep.equal([{ id: 2 }]);
        expect(takeAll(filter((el: {id: number}) => el.id % 2 === 0)(stream.start()))).to.deep.equal([{ id: 2 }]);
    });
});

describe("FilterAsync", () => {
    it("Removes the elements based on the predicate", async () => {
        const stream = periodicFrom(0, [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);

        expect(await takeAllAsync(filterAsync((el: {id: number}) => el.id % 2 === 0, stream.start())))
            .to.deep.equal([{ id: 2 }]);
        expect(await takeAllAsync(filterAsync((el: {id: number}) => el.id % 2 === 0)(stream.start())))
            .to.deep.equal([{ id: 2 }]);
    });
});
