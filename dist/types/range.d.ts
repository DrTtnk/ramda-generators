declare type Range = {
    (start: number, end: number): {
        start: () => Generator<number, void>;
    };
    (start: number): (end: number) => {
        start: () => Generator<number, void>;
    };
};
export declare const range: Range;
export {};
