export declare type GEN<TYPE extends "sync" | "async", T> = TYPE extends "sync" ? Generator<T, void> : AsyncGenerator<T, void>;
