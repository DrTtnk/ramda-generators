import { GEN } from "./utils";
declare type CountBy<TYPE extends "sync" | "async"> = {
    <T, R>(fn: (el: T) => string, gen: GEN<TYPE, T>): GEN<TYPE, {
        [key: string]: number;
    }>;
    <T, R>(fn: (el: T) => string): (gen: GEN<TYPE, T>) => GEN<TYPE, {
        [key: string]: number;
    }>;
};
export declare const countBy: CountBy<"sync">;
export declare const countByAsync: CountBy<"async">;
export {};
