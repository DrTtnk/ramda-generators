export function last<T>(gen: Generator<T, void>) {
    let lastElement;
    for (const value of gen) lastElement = value;
    return lastElement;
}

export async function lastAsync<T>(gen: AsyncGenerator<T, void>) {
    let lastElement;
    for await (const value of gen) lastElement = value;
    return lastElement;
}
