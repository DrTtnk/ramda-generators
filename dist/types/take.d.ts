import { GEN } from "./utils";
declare type Take<TYPE extends "sync" | "async"> = {
    <T>(amount: number, list: GEN<TYPE, T>): TYPE extends "sync" ? T[] : Promise<T[]>;
    <T>(amount: number): (list: GEN<TYPE, T>) => TYPE extends "sync" ? T[] : Promise<T[]>;
};
declare type TakeIterator<TYPE extends "sync" | "async"> = {
    <T>(amount: number, list: GEN<TYPE, T>): GEN<TYPE, T>;
    <T>(amount: number): (list: GEN<TYPE, T>) => GEN<TYPE, T>;
};
export declare const take: Take<"sync">;
export declare const takeAsync: Take<"async">;
export declare const takeIterator: TakeIterator<"sync">;
export declare const takeAsyncIterator: TakeIterator<"async">;
export {};
