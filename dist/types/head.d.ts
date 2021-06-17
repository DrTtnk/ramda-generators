export declare const head: <T>(gen: Generator<T, void, unknown>) => void | T;
export declare const headAsync: <T>(gen: AsyncGenerator<T, void, unknown>) => Promise<void | T>;
