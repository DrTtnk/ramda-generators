declare const _default: {
    zip: {
        <T1, T2>(gen1: Generator<T1, void, unknown>, gen2: Generator<T2, void, unknown>): Generator<[T1, T2], void, unknown>;
        <T1_1>(gen1: Generator<T1_1, void, unknown>): <T2_1>(gen2: Generator<T2_1, void, unknown>) => Generator<[T1_1, T2_1], void, unknown>;
    };
    zipAsync: {
        <T1_2, T2_2>(gen1: AsyncGenerator<T1_2, void, unknown>, gen2: AsyncGenerator<T2_2, void, unknown>): AsyncGenerator<[T1_2, T2_2], void, unknown>;
        <T1_3>(gen1: AsyncGenerator<T1_3, void, unknown>): <T2_3>(gen2: AsyncGenerator<T2_3, void, unknown>) => AsyncGenerator<[T1_3, T2_3], void, unknown>;
    };
    zipWith: {
        <T1_4, T2_4, R>(fn: (t1: T1_4, t2: T2_4) => R, gen1: Generator<T1_4, void, unknown>, gen2: Generator<T2_4, void, unknown>): Generator<R, void, unknown>;
        <T1_5, T2_5, R_1>(fn: (t1: T1_5, t2: T2_5) => R_1, gen1: Generator<T1_5, void, unknown>): (gen2: Generator<T2_5, void, unknown>) => Generator<R_1, void, unknown>;
        <T1_6, T2_6, R_2>(fn: (t1: T1_6, t2: T2_6) => R_2): {
            (gen1: Generator<T1_6, void, unknown>, gen2: Generator<T2_6, void, unknown>): Generator<R_2, void, unknown>;
            (gen1: Generator<T1_6, void, unknown>): (gen2: Generator<T2_6, void, unknown>) => Generator<R_2, void, unknown>;
        };
    };
    zipWithAsync: {
        <T1_7, T2_7, R_3>(fn: (t1: T1_7, t2: T2_7) => R_3, gen1: AsyncGenerator<T1_7, void, unknown>, gen2: AsyncGenerator<T2_7, void, unknown>): AsyncGenerator<R_3, void, unknown>;
        <T1_8, T2_8, R_4>(fn: (t1: T1_8, t2: T2_8) => R_4, gen1: AsyncGenerator<T1_8, void, unknown>): (gen2: AsyncGenerator<T2_8, void, unknown>) => AsyncGenerator<R_4, void, unknown>;
        <T1_9, T2_9, R_5>(fn: (t1: T1_9, t2: T2_9) => R_5): {
            (gen1: AsyncGenerator<T1_9, void, unknown>, gen2: AsyncGenerator<T2_9, void, unknown>): AsyncGenerator<R_5, void, unknown>;
            (gen1: AsyncGenerator<T1_9, void, unknown>): (gen2: AsyncGenerator<T2_9, void, unknown>) => AsyncGenerator<R_5, void, unknown>;
        };
    };
    uniqBy: {
        <T, Key>(fn: (el: T) => Key, gen: Generator<T, void, unknown>): Generator<T, void, unknown>;
        <T_1, Key_1>(fn: (el: T_1) => Key_1): (gen: Generator<T_1, void, unknown>) => Generator<T_1, void, unknown>;
    };
    uniqByAsync: {
        <T_2, Key_2>(fn: (el: T_2) => Key_2, gen: AsyncGenerator<T_2, void, unknown>): AsyncGenerator<T_2, void, unknown>;
        <T_3, Key_3>(fn: (el: T_3) => Key_3): (gen: AsyncGenerator<T_3, void, unknown>) => AsyncGenerator<T_3, void, unknown>;
    };
    take: {
        <T_4>(amount: number, list: Generator<T_4, void, unknown>): T_4[];
        <T_5>(amount: number): (list: Generator<T_5, void, unknown>) => T_5[];
    };
    takeAsync: {
        <T_6>(amount: number, list: AsyncGenerator<T_6, void, unknown>): Promise<T_6[]>;
        <T_7>(amount: number): (list: AsyncGenerator<T_7, void, unknown>) => Promise<T_7[]>;
    };
    takeIterator: {
        <T_8>(amount: number, list: Generator<T_8, void, unknown>): Generator<T_8, void, unknown>;
        <T_9>(amount: number): (list: Generator<T_9, void, unknown>) => Generator<T_9, void, unknown>;
    };
    takeAsyncIterator: {
        <T_10>(amount: number, list: AsyncGenerator<T_10, void, unknown>): AsyncGenerator<T_10, void, unknown>;
        <T_11>(amount: number): (list: AsyncGenerator<T_11, void, unknown>) => AsyncGenerator<T_11, void, unknown>;
    };
    takeWhile: {
        <T_12>(cond: (el: T_12) => boolean, list: Generator<T_12, void, unknown>): Generator<T_12, void, unknown>;
        <T_13>(cond: (el: T_13) => boolean): (list: Generator<T_13, void, unknown>) => Generator<T_13, void, unknown>;
    };
    takeWhileAsync: {
        <T_14>(cond: (el: T_14) => boolean, list: AsyncGenerator<T_14, void, unknown>): AsyncGenerator<T_14, void, unknown>;
        <T_15>(cond: (el: T_15) => boolean): (list: AsyncGenerator<T_15, void, unknown>) => AsyncGenerator<T_15, void, unknown>;
    };
    takeAll<T_16>(generator: Generator<T_16, void, unknown>): T_16[];
    takeAllAsync<T_17>(generator: AsyncGenerator<T_17, void, unknown>): Promise<T_17[]>;
    splitEvery: {
        <T_18>(size: number, gen: Generator<T_18, void, unknown>): Generator<T_18[], void, unknown>;
        (size: number): <T_19>(gen: Generator<T_19, void, unknown>) => Generator<T_19[], void, unknown>;
    };
    splitEveryAsync: {
        <T_20>(size: number, gen: AsyncGenerator<T_20, void, unknown>): AsyncGenerator<T_20[], void, unknown>;
        (size: number): <T_21>(gen: AsyncGenerator<T_21, void, unknown>) => AsyncGenerator<T_21[], void, unknown>;
    };
    scan: {
        <T_22, R_6>(fn: (acc: R_6, el: T_22) => R_6, init: R_6, gen: Generator<T_22, void, unknown>): Generator<R_6, void, unknown>;
        <T_23, R_7>(fn: (acc: R_7, el: T_23) => R_7, init: R_7): (gen: Generator<T_23, void, unknown>) => Generator<R_7, void, unknown>;
        <T_24, R_8>(fn: (acc: R_8, el: T_24) => R_8): {
            (init: R_8, gen: Generator<T_24, void, unknown>): Generator<R_8, void, unknown>;
            (init: R_8): (gen: Generator<T_24, void, unknown>) => Generator<R_8, void, unknown>;
        };
    };
    scanAsync: {
        <T_25, R_9>(fn: (acc: R_9, el: T_25) => R_9, init: R_9, gen: AsyncGenerator<T_25, void, unknown>): AsyncGenerator<R_9, void, unknown>;
        <T_26, R_10>(fn: (acc: R_10, el: T_26) => R_10, init: R_10): (gen: AsyncGenerator<T_26, void, unknown>) => AsyncGenerator<R_10, void, unknown>;
        <T_27, R_11>(fn: (acc: R_11, el: T_27) => R_11): {
            (init: R_11, gen: AsyncGenerator<T_27, void, unknown>): AsyncGenerator<R_11, void, unknown>;
            (init: R_11): (gen: AsyncGenerator<T_27, void, unknown>) => AsyncGenerator<R_11, void, unknown>;
        };
    };
    range: {
        (start: number, end: number): {
            start: () => Generator<number, void, unknown>;
        };
        (start: number): (end: number) => {
            start: () => Generator<number, void, unknown>;
        };
    };
    periodicFrom: {
        <R_12>(ms: number, list: {
            start: () => Generator<R_12, void, unknown> | Generator<Promise<R_12>, void, unknown>;
        } | Generator<R_12, void, unknown> | (() => R_12) | R_12[]): {
            start: () => AsyncGenerator<R_12, void, unknown>;
        };
        (ms: number): <R_13>(list: {
            start: () => Generator<R_13, void, unknown> | Generator<Promise<R_13>, void, unknown>;
        } | Generator<R_13, void, unknown> | (() => R_13) | R_13[]) => {
            start: () => AsyncGenerator<R_13, void, unknown>;
        };
    };
    periodic: (ms: number) => {
        start: () => AsyncGenerator<null, void, unknown>;
    };
    map: {
        <T_28, R_14>(fn: (el: T_28) => R_14, gen: Generator<T_28, void, unknown>): Generator<R_14, void, unknown>;
        <T_29, R_15>(fn: (el: T_29) => R_15): (gen: Generator<T_29, void, unknown>) => Generator<R_15, void, unknown>;
    };
    mapAsync: {
        <T_30, R_16>(fn: (el: T_30) => R_16, gen: AsyncGenerator<T_30, void, unknown>): AsyncGenerator<R_16, void, unknown>;
        <T_31, R_17>(fn: (el: T_31) => R_17): (gen: AsyncGenerator<T_31, void, unknown>) => AsyncGenerator<R_17, void, unknown>;
    };
    last<T_32>(gen: Generator<T_32, void, unknown>): T_32 | undefined;
    lastAsync<T_33>(gen: AsyncGenerator<T_33, void, unknown>): Promise<T_33 | undefined>;
    head: <T_34>(gen: Generator<T_34, void, unknown>) => void | T_34;
    headAsync: <T_35>(gen: AsyncGenerator<T_35, void, unknown>) => Promise<void | T_35>;
    generate: <R_18>(fn: (index: number) => R_18, limit?: number | undefined) => {
        start: () => Generator<R_18, void, unknown>;
    };
    generateAsync: <R_19>(fn: (index: number) => Promise<R_19>, limit?: number | undefined) => {
        start: () => AsyncGenerator<R_19, void, unknown>;
    };
    generateFromArray: <R_20>(v: R_20[]) => {
        start: () => Generator<R_20, void, unknown>;
    };
    flatMap: {
        <T_36, R_21>(fn: (el: T_36) => R_21[] | Generator<R_21, any, unknown>, gen: Generator<T_36, void, unknown>): Generator<R_21, void, unknown>;
        <T_37, R_22>(fn: (el: T_37) => R_22[] | Generator<R_22, any, unknown>): (gen: Generator<T_37, void, unknown>) => Generator<R_22, void, unknown>;
    };
    flatMapAsync: {
        <T_38, R_23>(fn: (el: T_38) => R_23[] | Generator<R_23, any, unknown>, gen: AsyncGenerator<T_38, void, unknown>): AsyncGenerator<R_23, void, unknown>;
        <T_39, R_24>(fn: (el: T_39) => R_24[] | Generator<R_24, any, unknown>): (gen: AsyncGenerator<T_39, void, unknown>) => AsyncGenerator<R_24, void, unknown>;
    };
    find: {
        <T_40>(cond: (el: T_40) => boolean, list: Generator<T_40, void, unknown>): T_40;
        <T_41>(cond: (el: T_41) => boolean): (list: Generator<T_41, void, unknown>) => T_41;
    };
    findAsync: {
        <T_42>(cond: (el: T_42) => boolean, list: AsyncGenerator<T_42, void, unknown>): Promise<T_42>;
        <T_43>(cond: (el: T_43) => boolean): (list: AsyncGenerator<T_43, void, unknown>) => Promise<T_43>;
    };
    filter: {
        <T_44>(cond: (el: T_44) => boolean, gen: Generator<T_44, void, unknown>): Generator<T_44, void, unknown>;
        <T_45>(cond: (el: T_45) => boolean): (gen: Generator<T_45, void, unknown>) => Generator<T_45, void, unknown>;
    };
    filterAsync: {
        <T_46>(cond: (el: T_46) => boolean, gen: AsyncGenerator<T_46, void, unknown>): AsyncGenerator<T_46, void, unknown>;
        <T_47>(cond: (el: T_47) => boolean): (gen: AsyncGenerator<T_47, void, unknown>) => AsyncGenerator<T_47, void, unknown>;
    };
    drop: {
        <T_48>(amount: number, gen: Generator<T_48, void, unknown>): Generator<T_48, void, unknown>;
        (amount: number): <T_49>(gen: Generator<T_49, void, unknown>) => Generator<T_49, void, unknown>;
    };
    dropAsync: {
        <T_50>(amount: number, gen: AsyncGenerator<T_50, void, unknown>): AsyncGenerator<T_50, void, unknown>;
        (amount: number): <T_51>(gen: AsyncGenerator<T_51, void, unknown>) => AsyncGenerator<T_51, void, unknown>;
    };
    dropWhile: {
        <T_52>(cond: (el: T_52) => boolean, gen: Generator<T_52, void, unknown>): Generator<T_52, void, unknown>;
        <T_53>(cond: (el: T_53) => boolean): (gen: Generator<T_53, void, unknown>) => Generator<T_53, void, unknown>;
    };
    dropWhileAsync: {
        <T_54>(cond: (el: T_54) => boolean, gen: AsyncGenerator<T_54, void, unknown>): AsyncGenerator<T_54, void, unknown>;
        <T_55>(cond: (el: T_55) => boolean): (gen: AsyncGenerator<T_55, void, unknown>) => AsyncGenerator<T_55, void, unknown>;
    };
    debounce: <T_56>(gen: Generator<T_56, void, unknown>) => Generator<T_56, void, unknown>;
    debounceAsync: <T_56>(gen: AsyncGenerator<T_56, void, unknown>) => AsyncGenerator<T_56, void, unknown>;
    debounceBy: {
        <T_57, K>(fn: (el: T_57) => K, gen: Generator<T_57, void, unknown>): Generator<K, void, unknown>;
        <T_58, K_1>(fn: (el: T_58) => K_1): (gen: Generator<T_58, void, unknown>) => Generator<K_1, void, unknown>;
    };
    debounceByAsync: {
        <T_59, K_2>(fn: (el: T_59) => K_2, gen: AsyncGenerator<T_59, void, unknown>): AsyncGenerator<K_2, void, unknown>;
        <T_60, K_3>(fn: (el: T_60) => K_3): (gen: AsyncGenerator<T_60, void, unknown>) => AsyncGenerator<K_3, void, unknown>;
    };
    countBy: {
        <T_61, R_25>(fn: (el: T_61) => string, gen: Generator<T_61, void, unknown>): Generator<{
            [key: string]: number;
        }, void, unknown>;
        <T_62, R_26>(fn: (el: T_62) => string): (gen: Generator<T_62, void, unknown>) => Generator<{
            [key: string]: number;
        }, void, unknown>;
    };
    countByAsync: {
        <T_63, R_27>(fn: (el: T_63) => string, gen: AsyncGenerator<T_63, void, unknown>): AsyncGenerator<{
            [key: string]: number;
        }, void, unknown>;
        <T_64, R_28>(fn: (el: T_64) => string): (gen: AsyncGenerator<T_64, void, unknown>) => AsyncGenerator<{
            [key: string]: number;
        }, void, unknown>;
    };
};
export default _default;
