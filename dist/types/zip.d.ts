import { GEN } from "./utils";
declare type Zip<TYPE extends "sync" | "async"> = {
    <T1, T2>(gen1: GEN<TYPE, T1>, gen2: GEN<TYPE, T2>): GEN<TYPE, [T1, T2]>;
    <T1>(gen1: GEN<TYPE, T1>): <T2>(gen2: GEN<TYPE, T2>) => GEN<TYPE, [T1, T2]>;
};
export declare const zip: Zip<"sync">;
export declare const zipAsync: Zip<"async">;
export {};
