import { GEN } from "./utils";
declare type Filter<TYPE extends "sync" | "async"> = {
    <T>(cond: (el: T) => boolean, gen: GEN<TYPE, T>): GEN<TYPE, T>;
    <T>(cond: (el: T) => boolean): (gen: GEN<TYPE, T>) => GEN<TYPE, T>;
};
export declare const filter: Filter<"sync">;
export declare const filterAsync: Filter<"async">;
export {};
