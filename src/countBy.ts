/* eslint-disable max-len */
import { uncurryN }        from "ramda";
import { scan, scanAsync } from "./scan";
import { GEN }             from "./utils";

const accumCounters = <T>(fn: (el: T) => string) => (acc: { [key: string]: number }, el: T) => ({
    ...acc,
    [fn(el)]: (acc[fn(el)] || 0) + 1,
});

const _countBy = <T, R>(fn: (el: T) => string) => scan(accumCounters(fn), {});

const _countByAsync = <T, R>(fn: (el: T) => string) => scanAsync(accumCounters(fn), {});

type CountBy<TYPE extends "sync"|"async"> = {
    <T, R>(fn: (el: T) => string,   gen: GEN<TYPE, T>):   GEN<TYPE, { [key: string]: number }>;
    <T, R>(fn: (el: T) => string): (gen: GEN<TYPE, T>) => GEN<TYPE, { [key: string]: number }>;
}

export const countBy:      CountBy<"sync">  = uncurryN(2, _countBy)      as CountBy<"sync">;
export const countByAsync: CountBy<"async"> = uncurryN(2, _countByAsync) as CountBy<"async">;
