import { GEN } from "./utils";
declare type Scan<TYPE extends "sync" | "async"> = {
    <T, R>(fn: (acc: R, el: T) => R, init: R, gen: GEN<TYPE, T>): GEN<TYPE, R>;
    <T, R>(fn: (acc: R, el: T) => R, init: R): (gen: GEN<TYPE, T>) => GEN<TYPE, R>;
    <T, R>(fn: (acc: R, el: T) => R): {
        (init: R, gen: GEN<TYPE, T>): GEN<TYPE, R>;
        (init: R): (gen: GEN<TYPE, T>) => GEN<TYPE, R>;
    };
};
export declare const scan: Scan<"sync">;
export declare const scanAsync: Scan<"async">;
export {};
