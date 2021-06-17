/* eslint-disable no-plusplus,no-console */

export const generate = <R>(fn: (index: number) => R, limit?: number) => ({
    start: function* () {
        for (let i = 0; !limit || i < limit; i++) yield fn(i);
        console.log(`The stream has reached the limit of ${limit} elements`);
    },
});

export const generateAsync = <R>(fn: (index: number) => Promise<R>, limit?: number) => ({
    start: async function* () {
        for (let i = 0; !limit || i < limit; i++) yield await fn(i);
        console.log(`The stream has reached the limit of ${limit} elements`);
    },
});

export const generateFromArray = <R>(v: R[]) => ({
    start: function* () { for (const el of v) yield el; },
});
