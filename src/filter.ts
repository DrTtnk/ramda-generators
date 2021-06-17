import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _filter<T>(cond: (el: T) => boolean, gen: Generator<T, void>) {
    for (const value of gen) if (cond(value)) yield value;
}

async function* _filterAsync<T>(cond: (el: T) => boolean, gen: AsyncGenerator<T, void>) {
    for await (const value of gen) if (cond(value)) yield value;
}

type Filter<TYPE extends "sync"|"async"> = {
    <T>(cond: (el: T) => boolean,   gen: GEN<TYPE, T>):   GEN<TYPE, T>;
    <T>(cond: (el: T) => boolean): (gen: GEN<TYPE, T>) => GEN<TYPE, T>;
}

export const filter:      Filter<"sync">  =      curryN(2, _filter);
export const filterAsync: Filter<"async"> = curryN(2, _filterAsync);
