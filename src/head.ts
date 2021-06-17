export const head = <T>(gen: Generator<T, void>) => gen.next()?.value;

export const headAsync = async <T>(gen: AsyncGenerator<T, void>) => (await gen.next())?.value;
