import { GEN } from "./utils";
declare type Debounce<TYPE extends "sync" | "async"> = {
    <T, K>(fn: (el: T) => K, gen: GEN<TYPE, T>): GEN<TYPE, K>;
    <T, K>(fn: (el: T) => K): (gen: GEN<TYPE, T>) => GEN<TYPE, K>;
};
export declare const debounceBy: Debounce<"sync">;
export declare const debounceByAsync: Debounce<"async">;
export {};
