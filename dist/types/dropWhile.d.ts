import { GEN } from "./utils";
declare type DropWhile<TYPE extends "sync" | "async"> = {
    <T>(cond: (el: T) => boolean, gen: GEN<TYPE, T>): GEN<TYPE, T>;
    <T>(cond: (el: T) => boolean): (gen: GEN<TYPE, T>) => GEN<TYPE, T>;
};
export declare const dropWhile: DropWhile<"sync">;
export declare const dropWhileAsync: DropWhile<"async">;
export {};
