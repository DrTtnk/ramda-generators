import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _dropWhile<T>(cond: (el: T) => boolean, gen: Generator<T, void>) {
    let taking = false;
    // eslint-disable-next-line no-cond-assign
    for (const value of gen) if ((taking = taking || !cond(value))) yield value;
}

async function* _dropWhileAsync<T>(cond: (el: T) => boolean, gen: AsyncGenerator<T, void>) {
    let taking = false;
    // eslint-disable-next-line no-cond-assign
    for await (const value of gen) if ((taking = taking || !cond(value))) yield value;
}

type DropWhile<TYPE extends "sync"|"async"> = {
    <T>(cond: (el: T) => boolean,   gen: GEN<TYPE, T>):   GEN<TYPE, T>;
    <T>(cond: (el: T) => boolean): (gen: GEN<TYPE, T>) => GEN<TYPE, T>;
}

export const dropWhile:      DropWhile<"sync">  = curryN(2, _dropWhile);
export const dropWhileAsync: DropWhile<"async"> = curryN(2, _dropWhileAsync);
