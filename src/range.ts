import { curryN }   from "ramda";
import { generate } from "./generate";

const _range = (start: number, end: number) => generate(id => id + start, end - start);

type Range = {
    (start: number,   end: number):   { start: () => Generator<number, void> };
    (start: number): (end: number) => { start: () => Generator<number, void> };
}

export const range: Range = curryN(2, _range);
