import { pair }                  from "ramda";
import { GEN }                   from "./utils";
import { zipWith, zipWithAsync } from "./zipWith";

type Zip<TYPE extends "sync"|"async"> = {
    <T1, T2>(gen1: GEN<TYPE, T1>,   gen2: GEN<TYPE, T2>):   GEN<TYPE, [T1, T2]>;
    <T1>(gen1: GEN<TYPE, T1>): <T2>(gen2: GEN<TYPE, T2>) => GEN<TYPE, [T1, T2]>;
}

export const zip:      Zip<"sync">  = zipWith(pair) as Zip<"sync">;
export const zipAsync: Zip<"async"> = zipWithAsync(pair) as Zip<"async">;
