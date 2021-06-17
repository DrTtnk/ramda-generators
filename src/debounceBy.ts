import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _debounceBy<T, K>(fn: (el: T) => K, gen: Generator<T, void>) {
    let lastKey: K | number = NaN;
    // eslint-disable-next-line no-cond-assign
    for (const value of gen) if (lastKey !== (lastKey = fn(value))) yield value;
}

async function* _debounceByAsync<T, K>(fn: (el: T) => K, gen: AsyncGenerator<T, void>) {
    let lastKey: K | number = NaN;
    // eslint-disable-next-line no-cond-assign
    for await (const value of gen) if (lastKey !== (lastKey = fn(value))) yield value;
}

type Debounce<TYPE extends "sync"|"async"> = {
    <T, K>(fn: (el: T) => K,   gen: GEN<TYPE, T>):   GEN<TYPE, K>;
    <T, K>(fn: (el: T) => K): (gen: GEN<TYPE, T>) => GEN<TYPE, K>;
}

export const debounceBy:      Debounce<"sync">  = curryN(2, _debounceBy);
export const debounceByAsync: Debounce<"async"> = curryN(2, _debounceByAsync);
