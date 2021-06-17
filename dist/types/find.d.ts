import { GEN } from "./utils";
declare type Find<TYPE extends "sync" | "async"> = {
    <T>(cond: (el: T) => boolean, list: GEN<TYPE, T>): TYPE extends "sync" ? T : Promise<T>;
    <T>(cond: (el: T) => boolean): (list: GEN<TYPE, T>) => TYPE extends "sync" ? T : Promise<T>;
};
export declare const find: Find<"sync">;
export declare const findAsync: Find<"async">;
export {};
