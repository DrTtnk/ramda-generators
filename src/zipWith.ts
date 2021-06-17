import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _zipWith<T1, T2, R>(fn: (t1: T1, t2: T2) => R, gen1: Generator<T1, void>, gen2: Generator<T2, void>) {
    /* istanbul ignore next */
    while (true) {
        const value1 = gen1.next();
        const value2 = gen2.next();

        if (value1.done || value2.done) return;
        yield fn(value1.value, value2.value);
    }
}

// eslint-disable-next-line max-len
async function* _zipWithAsync<T1, T2, R>(fn: (t1: T1, t2: T2) => R, gen1: AsyncGenerator<T1, void>, gen2: AsyncGenerator<T2, void>) {
    /* istanbul ignore next */
    while (true) {
        const [value1, value2] = await Promise.all([gen1.next(), gen2.next()]);

        if (value1.done || value2.done) return;
        yield fn(value1.value, value2.value);
    }
}

type ZipWith<TYPE extends "sync"|"async"> = {
    <T1, T2, R>(fn: (t1: T1, t2: T2) => R,   gen1: GEN<TYPE, T1>,     gen2: GEN<TYPE, T2>):   GEN<TYPE, R>;
    <T1, T2, R>(fn: (t1: T1, t2: T2) => R,   gen1: GEN<TYPE, T1>):   (gen2: GEN<TYPE, T2>) => GEN<TYPE, R>;
    <T1, T2, R>(fn: (t1: T1, t2: T2) => R): {
        (gen1: GEN<TYPE, T1>, gen2: GEN<TYPE, T2>):     GEN<TYPE, R>;
        (gen1: GEN<TYPE, T1>): (gen2: GEN<TYPE, T2>) => GEN<TYPE, R>;
    };
}

export const zipWith:      ZipWith<"sync">  = curryN(3, _zipWith);
export const zipWithAsync: ZipWith<"async"> = curryN(3, _zipWithAsync);
