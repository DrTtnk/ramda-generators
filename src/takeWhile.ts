import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _takeWhile<T>(cond: (el: T) => boolean, gen: Generator<T, void>) {
    for (const value of gen) {
        if (!cond(value)) break;
        yield value;
    }
}

async function* _takeWhileAsync<T>(cond: (el: T) => boolean, gen: AsyncGenerator<T, void>) {
    for await (const value of gen) {
        if (!cond(value)) break;
        yield value;
    }
}

type TakeWhile<TYPE extends "sync"|"async"> = {
    <T>(cond: (el: T) => boolean,   list: GEN<TYPE, T>):   GEN<TYPE, T>;
    <T>(cond: (el: T) => boolean): (list: GEN<TYPE, T>) => GEN<TYPE, T>;
}

export const takeWhile:      TakeWhile<"sync">  = curryN(2, _takeWhile);
export const takeWhileAsync: TakeWhile<"async"> = curryN(2, _takeWhileAsync);
