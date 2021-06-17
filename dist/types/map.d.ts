import { GEN } from "./utils";
declare type Map<TYPE extends "sync" | "async"> = {
    <T, R>(fn: (el: T) => R, gen: GEN<TYPE, T>): GEN<TYPE, R>;
    <T, R>(fn: (el: T) => R): (gen: GEN<TYPE, T>) => GEN<TYPE, R>;
};
export declare const map: Map<"sync">;
export declare const mapAsync: Map<"async">;
export {};
