/* eslint-disable no-unused-expressions */
import { expect }                    from "chai";
import { dropWhile, dropWhileAsync } from "../src/dropWhile";
import { generateFromArray }         from "../src/generate";
import { periodicFrom }              from "../src/periodic";
import { takeAll, takeAllAsync }     from "../src/takeAll";

describe("DropWhile", () => {
    it("Removes all the elements until the condition is verified", () => {
        const stream = generateFromArray([
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 1 },
        ]);

        expect(takeAll(dropWhile((el: {id: number}) => el.id <= 2, stream.start())))
            .to.deep.equal([{ id: 3 }, { id: 1 }]);
        expect(takeAll(dropWhile((el: {id: number}) => el.id <= 2)(stream.start())))
            .to.deep.equal([{ id: 3 }, { id: 1 }]);
    });
});

describe("DropWhileAsync", () => {
    it("Removes all the elements until the condition is verified", async () => {
        const stream = periodicFrom(0, [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 1 },
        ]);

        expect(await takeAllAsync(dropWhileAsync((el: {id: number}) => el.id <= 2, stream.start())))
            .to.deep.equal([{ id: 3 }, { id: 1 }]);
        expect(await takeAllAsync(dropWhileAsync((el: {id: number}) => el.id <= 2)(stream.start())))
            .to.deep.equal([{ id: 3 }, { id: 1 }]);
    });
});
