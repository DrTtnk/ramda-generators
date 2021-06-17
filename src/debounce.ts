import { identity }                    from "ramda";
import { debounceBy, debounceByAsync } from "./debounceBy";

export const debounce      = debounceBy(identity);
export const debounceAsync = debounceByAsync(identity);
