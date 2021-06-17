/* eslint-disable max-len */
import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _map<T, R>(fn: (el: T) => R, gen: Generator<T, void>) {
    for (const value of gen) yield fn(value);
}

async function* _mapAsync<T, R>(fn: (el: T) => R, gen: AsyncGenerator<T, void>) {
    for await (const value of gen) yield fn(value);
}

type Map<TYPE extends "sync"|"async"> = {
    <T, R>(fn: (el: T) => R,   gen: GEN<TYPE, T>):   GEN<TYPE, R>;
    <T, R>(fn: (el: T) => R): (gen: GEN<TYPE, T>) => GEN<TYPE, R>;
}

export const map:      Map<"sync">  = curryN(2, _map);
export const mapAsync: Map<"async"> = curryN(2, _mapAsync);
