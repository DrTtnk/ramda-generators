import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _scan<T, R>(fn: (acc: R, el: T) => R, init: R, gen: Generator<T, void>) {
    // eslint-disable-next-line no-param-reassign
    for (const value of gen) { yield init = fn(init, value); }
}

async function* _scanAsync<T, R>(fn: (acc: R, el: T) => R, init: R, gen: AsyncGenerator<T, void>) {
    // eslint-disable-next-line no-param-reassign
    for await (const value of gen) { yield init = fn(init, value); }
}

type Scan<TYPE extends "sync"|"async"> = {
    <T, R>(fn: (acc: R, el: T) => R,   init: R,   gen: GEN<TYPE, T>):   GEN<TYPE, R>;
    <T, R>(fn: (acc: R, el: T) => R,   init: R): (gen: GEN<TYPE, T>) => GEN<TYPE, R>;
    <T, R>(fn: (acc: R, el: T) => R): {
        (init: R,   gen: GEN<TYPE, T>): GEN<TYPE, R>;
        (init: R): (gen: GEN<TYPE, T>) => GEN<TYPE, R>;
    };
}

export const scan:      Scan<"sync">  = curryN(3, _scan);
export const scanAsync: Scan<"async"> = curryN(3, _scanAsync);
