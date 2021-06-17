import { curryN } from "ramda";
import { GEN }    from "./utils";

function* _drop<T>(amount: number, gen: Generator<T, void>) {
    // eslint-disable-next-line no-plusplus,no-param-reassign
    for (const value of gen) if (amount-- <= 0) yield value;
}

async function* _dropAsync<T>(amount: number, gen: AsyncGenerator<T, void>) {
    // eslint-disable-next-line no-plusplus,no-param-reassign
    for await (const value of gen) if (amount-- <= 0) yield value;
}

type Drop<TYPE extends "sync"|"async"> = {
    <T>(amount: number,   gen: GEN<TYPE, T>):   GEN<TYPE, T>;
    (amount: number): <T>(gen: GEN<TYPE, T>) => GEN<TYPE, T>;
}

export const drop:      Drop<"sync">  = curryN(2, _drop);
export const dropAsync: Drop<"async"> = curryN(2, _dropAsync);
