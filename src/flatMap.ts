import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _flatMap<T, R>(fn: (el: T) => R[] | Generator<R, void>, gen: Generator<T, void>) {
    for (const value of gen) yield * fn(value);
}

async function* _flatMapAsync<T, R>(fn: (el: T) => R[] | Generator<R, void>, gen: AsyncGenerator<T, void>) {
    for await (const value of gen) yield * fn(value);
}

type FlatMap<TYPE extends "sync"|"async"> = {
    <T, R>(fn: (el: T) => R[] | Generator<R>,   gen: GEN<TYPE, T>):   GEN<TYPE, R>;
    <T, R>(fn: (el: T) => R[] | Generator<R>): (gen: GEN<TYPE, T>) => GEN<TYPE, R>;
}

export const flatMap:      FlatMap<"sync">  = curryN(2, _flatMap);
export const flatMapAsync: FlatMap<"async"> = curryN(2, _flatMapAsync);
