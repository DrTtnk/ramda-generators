import { curryN } from "ramda";

const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

type PeriodicInput<R> =
    { start: () => Generator<R, void>|Generator<Promise<R>, void> }
    |Generator<R, void>
    |(() => R)
    |R[]

// eslint-disable-next-line complexity
async function* _periodicFrom<R>(ms: number, list: PeriodicInput<R>) {
    if (list instanceof Function) {
        while (true) { yield list(); await sleep(ms); }
    } else if (list instanceof Array) {
        for (const el of list) { yield el; await sleep(ms); }
    } else if (typeof list === "object" && "start" in list) {
        for (const el of list.start()) { yield el; await sleep(ms); }
    } else {
        /* istanbul ignore next */
        while (true) { yield list; await sleep(ms); }
    }
}

type PeriodicFrom = {
    <R>(ms: number, list: PeriodicInput<R>):     { start: () => AsyncGenerator<R, void> };
    (ms: number): <R>(list: PeriodicInput<R>) => { start: () => AsyncGenerator<R, void> };
}

export const periodicFrom: PeriodicFrom = curryN(2, <R>(ms: number, list: PeriodicInput<R>) => ({
    start: () => _periodicFrom(ms, list),
}));

export const periodic = (ms: number) => periodicFrom<null>(ms, () => null);
