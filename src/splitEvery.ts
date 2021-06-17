/* eslint-disable max-len */
import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _splitEvery<T, R>(size: number, gen: Generator<T, void>) {
    let res = [];
    for (const value of gen) {
        if (res.length === size) { yield res; res = []; }
        res.push(value);
    }
    yield res;
}

async function* _splitEveryAsync<T, R>(size: number, gen: AsyncGenerator<T, void>) {
    let res = [];
    for await (const value of gen) {
        if (res.length === size) { yield res; res = []; }
        res.push(value);
    }
    yield res;
}

type SplitEvery<TYPE extends "sync"|"async"> = {
    <T>(size: number,   gen: GEN<TYPE, T>):   GEN<TYPE, T[]>;
    (size: number): <T>(gen: GEN<TYPE, T>) => GEN<TYPE, T[]>;
}

export const splitEvery:      SplitEvery<"sync">  = curryN(2, _splitEvery);
export const splitEveryAsync: SplitEvery<"async"> = curryN(2, _splitEveryAsync);
