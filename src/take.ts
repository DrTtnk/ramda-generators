import { curryN } from "ramda";
import { GEN }    from "./utils";

function _take<T>(amount: number, gen: Generator<T, void>) {
    const res = [];
    for (const value of gen) {
        // eslint-disable-next-line no-param-reassign,no-plusplus
        if (amount-- <= 0) break;
        res.push(value);
    }
    return res;
}

async function _takeAsync<T>(amount: number, gen: AsyncGenerator<T, void>) {
    const res = [];
    for await (const value of gen) {
        // eslint-disable-next-line no-param-reassign,no-plusplus
        if (amount-- <= 0) break;
        res.push(value);
    }
    return res;
}

function * _takeIterator<T>(amount: number, gen: Generator<T, void>) {
    for (const value of gen) {
        // eslint-disable-next-line no-param-reassign,no-plusplus
        if (amount-- === 0) break;
        yield value;
    }
    return amount + 1;
}

async function * _takeAsyncIterator<T>(amount: number, gen: AsyncGenerator<T, void>) {
    for await (const value of gen) {
        // eslint-disable-next-line no-param-reassign,no-plusplus
        if (amount-- <= 0) break;
        yield value;
    }
    return amount + 1;
}

type Take<TYPE extends "sync"|"async"> = {
    <T>(amount: number,   list: GEN<TYPE, T>):   TYPE extends "sync" ? T[] : Promise<T[]>;
    <T>(amount: number): (list: GEN<TYPE, T>) => TYPE extends "sync" ? T[] : Promise<T[]>;
}

type TakeIterator<TYPE extends "sync"|"async"> = {
    <T>(amount: number,   list: GEN<TYPE, T>):   GEN<TYPE, T>;
    <T>(amount: number): (list: GEN<TYPE, T>) => GEN<TYPE, T>;
}

export const take:      Take<"sync">  = curryN(2, _take);
export const takeAsync: Take<"async"> = curryN(2, _takeAsync);

export const takeIterator:      TakeIterator<"sync"> = curryN(2, _takeIterator);
export const takeAsyncIterator: TakeIterator<"async"> = curryN(2, _takeAsyncIterator);
