import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _uniqBy<T, Key>(fn: (el: T) => Key, gen: Generator<T, void>) {
    const unique = new Set<Key>();
    for (const value of gen) {
        const key = fn(value);
        if (!unique.has(key)) {
            unique.add(key);
            yield value;
        }
    }
}

async function* _uniqByAsync<T, Key>(fn: (el: T) => Key, gen: AsyncGenerator<T, void>) {
    const unique = new Set<Key>();
    for await (const value of gen) {
        const key = fn(value);
        if (!unique.has(key)) {
            unique.add(key);
            yield value;
        }
    }
}

type UniqBy<TYPE extends "sync"|"async"> = {
    <T, Key>(fn: (el: T) => Key,   gen: GEN<TYPE, T>):   GEN<TYPE, T>;
    <T, Key>(fn: (el: T) => Key): (gen: GEN<TYPE, T>) => GEN<TYPE, T>;
}

export const uniqBy:      UniqBy<"sync">  = curryN(2, _uniqBy);
export const uniqByAsync: UniqBy<"async"> = curryN(2, _uniqByAsync);
