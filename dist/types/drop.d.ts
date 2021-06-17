import { GEN } from "./utils";
declare type Drop<TYPE extends "sync" | "async"> = {
    <T>(amount: number, gen: GEN<TYPE, T>): GEN<TYPE, T>;
    (amount: number): <T>(gen: GEN<TYPE, T>) => GEN<TYPE, T>;
};
export declare const drop: Drop<"sync">;
export declare const dropAsync: Drop<"async">;
export {};
