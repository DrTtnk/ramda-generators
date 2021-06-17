export declare const generate: <R>(fn: (index: number) => R, limit?: number | undefined) => {
    start: () => Generator<R, void, unknown>;
};
export declare const generateAsync: <R>(fn: (index: number) => Promise<R>, limit?: number | undefined) => {
    start: () => AsyncGenerator<R, void, unknown>;
};
export declare const generateFromArray: <R>(v: R[]) => {
    start: () => Generator<R, void, unknown>;
};
