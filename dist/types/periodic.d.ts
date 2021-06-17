declare type PeriodicInput<R> = {
    start: () => Generator<R, void> | Generator<Promise<R>, void>;
} | Generator<R, void> | (() => R) | R[];
declare type PeriodicFrom = {
    <R>(ms: number, list: PeriodicInput<R>): {
        start: () => AsyncGenerator<R, void>;
    };
    (ms: number): <R>(list: PeriodicInput<R>) => {
        start: () => AsyncGenerator<R, void>;
    };
};
export declare const periodicFrom: PeriodicFrom;
export declare const periodic: (ms: number) => {
    start: () => AsyncGenerator<null, void, unknown>;
};
export {};
