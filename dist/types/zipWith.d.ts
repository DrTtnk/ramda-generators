import { GEN } from "./utils";
declare type ZipWith<TYPE extends "sync" | "async"> = {
    <T1, T2, R>(fn: (t1: T1, t2: T2) => R, gen1: GEN<TYPE, T1>, gen2: GEN<TYPE, T2>): GEN<TYPE, R>;
    <T1, T2, R>(fn: (t1: T1, t2: T2) => R, gen1: GEN<TYPE, T1>): (gen2: GEN<TYPE, T2>) => GEN<TYPE, R>;
    <T1, T2, R>(fn: (t1: T1, t2: T2) => R): {
        (gen1: GEN<TYPE, T1>, gen2: GEN<TYPE, T2>): GEN<TYPE, R>;
        (gen1: GEN<TYPE, T1>): (gen2: GEN<TYPE, T2>) => GEN<TYPE, R>;
    };
};
export declare const zipWith: ZipWith<"sync">;
export declare const zipWithAsync: ZipWith<"async">;
export {};
