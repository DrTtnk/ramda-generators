export function takeAll<T>(generator: Generator<T, void>) {
    const res = [];
    for (const value of generator) res.push(value);
    return res;
}

export async function takeAllAsync<T>(generator: AsyncGenerator<T, void>) {
    const res = [];
    for await (const value of generator) res.push(value);
    return res;
}
