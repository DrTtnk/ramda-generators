import { GEN } from "./utils";
declare type UniqBy<TYPE extends "sync" | "async"> = {
    <T, Key>(fn: (el: T) => Key, gen: GEN<TYPE, T>): GEN<TYPE, T>;
    <T, Key>(fn: (el: T) => Key): (gen: GEN<TYPE, T>) => GEN<TYPE, T>;
};
export declare const uniqBy: UniqBy<"sync">;
export declare const uniqByAsync: UniqBy<"async">;
export {};
