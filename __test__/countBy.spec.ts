/* eslint-disable no-unused-expressions */
import { expect }                from "chai";
import { countBy, countByAsync } from "../src/countBy";
import { generateFromArray }     from "../src/generate";
import { last, lastAsync }       from "../src/last";
import { periodicFrom }          from "../src/periodic";
import { takeAll, takeAllAsync } from "../src/takeAll";

const evenType = (n: number) => n % 2 === 0 ? "even" : "odd";

describe("CountBy", () => {
    it("CountBy the elements based on the predicate", () => {
        const stream = generateFromArray([1, 2, 3, 4, 5]);

        expect(takeAll(countBy(evenType, stream.start()))).to.deep.equal([
            { odd: 1 },
            { even: 1, odd: 1 },
            { even: 1, odd: 2 },
            { even: 2, odd: 2 },
            { even: 2, odd: 3 },
        ]);

        expect(last(countBy(evenType, stream.start()))).to.deep.equal({ even: 2, odd: 3 });
        expect(last(countBy(evenType)(stream.start()))).to.deep.equal({ even: 2, odd: 3 });
    });
});

describe("CountByAsync", () => {
    it("CountBy the elements based on the predicate", async () => {
        const stream = periodicFrom(0, [1, 2, 3, 4, 5]);

        expect(await takeAllAsync(countByAsync(evenType, stream.start()))).to.deep.equal([
            { odd: 1 },
            { even: 1, odd: 1 },
            { even: 1, odd: 2 },
            { even: 2, odd: 2 },
            { even: 2, odd: 3 },
        ]);

        expect(await lastAsync(countByAsync(evenType, stream.start()))).to.deep.equal({ even: 2, odd: 3 });
        expect(await lastAsync(countByAsync(evenType)(stream.start()))).to.deep.equal({ even: 2, odd: 3 });
    });
});
