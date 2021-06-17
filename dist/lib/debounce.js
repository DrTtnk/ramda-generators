"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
var debounceBy_1 = require("./debounceBy");
exports.debounce = debounceBy_1.debounceBy(ramda_1.identity);
exports.debounceAsync = debounceBy_1.debounceByAsync(ramda_1.identity);
//# sourceMappingURL=debounce.js.map