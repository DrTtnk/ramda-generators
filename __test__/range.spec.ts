/* eslint-disable no-unused-expressions */
import { expect }  from "chai";
import { range }   from "../src/range";
import { takeAll } from "../src/takeAll";

describe("Map", () => {
    it("Generate a range of numbers in the interval [N, M)", () => {
        expect(takeAll(range(-1, 2).start())).to.deep.equal([-1, 0, 1]);
        expect(takeAll(range(-1)(2).start())).to.deep.equal([-1, 0, 1]);
    });
});
