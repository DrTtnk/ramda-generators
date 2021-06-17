import { GEN } from "./utils";
declare type TakeWhile<TYPE extends "sync" | "async"> = {
    <T>(cond: (el: T) => boolean, list: GEN<TYPE, T>): GEN<TYPE, T>;
    <T>(cond: (el: T) => boolean): (list: GEN<TYPE, T>) => GEN<TYPE, T>;
};
export declare const takeWhile: TakeWhile<"sync">;
export declare const takeWhileAsync: TakeWhile<"async">;
export {};
