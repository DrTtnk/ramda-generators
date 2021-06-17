import { curryN } from "ramda";
import { GEN }    from "./utils";

const _find = <T>(cond: (el: T) => boolean, gen: Generator<T, void>) => {
    for (const value of gen) if (cond(value)) return value;
    return null;
};

const _findAsync = async <T>(cond: (el: T) => boolean, gen: AsyncGenerator<T, void>) => {
    for await (const value of gen) if (cond(value)) return value;
    return null;
};

type Find<TYPE extends "sync"|"async"> = {
    <T>(cond: (el: T) => boolean,   list: GEN<TYPE, T>):   TYPE extends "sync" ? T : Promise<T>;
    <T>(cond: (el: T) => boolean): (list: GEN<TYPE, T>) => TYPE extends "sync" ? T : Promise<T>;
}

export const find:      Find<"sync">  = curryN(2, _find);
export const findAsync: Find<"async"> = curryN(2, _findAsync);
