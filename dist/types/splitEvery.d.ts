import { GEN } from "./utils";
declare type SplitEvery<TYPE extends "sync" | "async"> = {
    <T>(size: number, gen: GEN<TYPE, T>): GEN<TYPE, T[]>;
    (size: number): <T>(gen: GEN<TYPE, T>) => GEN<TYPE, T[]>;
};
export declare const splitEvery: SplitEvery<"sync">;
export declare const splitEveryAsync: SplitEvery<"async">;
export {};
