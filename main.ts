import R                   from "ramda";
import { generateAsync }   from "./src/generate";
import { headAsync }       from "./src/head";
import { lastAsync }       from "./src/last";
import { mapAsync }        from "./src/map";
import { splitEveryAsync } from "./src/splitEvery";
import { takeAllAsync }    from "./src/takeAll";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fn = async (i: number) => {
    await sleep(1);
    return { i, t: Date.now() };
};
const getDocs = (amount: number) => generateAsync(fn, amount);

const amount = 1000000;

const compute = async (chunkSize: number) => {
    const first = await headAsync(getDocs(amount).start());
    const last = await lastAsync(getDocs(amount).start());

    return R.pipe(
        getDocs(amount).start,
        splitEveryAsync(chunkSize),
        mapAsync(i => "emit " + JSON.stringify(i)),
        mapAsync(res => ({ first, last, res })),
        takeAllAsync,
    )();
};

compute(100);
