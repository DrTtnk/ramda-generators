import { GEN } from "./utils";
declare type FlatMap<TYPE extends "sync" | "async"> = {
    <T, R>(fn: (el: T) => R[] | Generator<R>, gen: GEN<TYPE, T>): GEN<TYPE, R>;
    <T, R>(fn: (el: T) => R[] | Generator<R>): (gen: GEN<TYPE, T>) => GEN<TYPE, R>;
};
export declare const flatMap: FlatMap<"sync">;
export declare const flatMapAsync: FlatMap<"async">;
export {};
