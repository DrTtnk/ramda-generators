"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
var zipWith_1 = require("./zipWith");
exports.zip = zipWith_1.zipWith(ramda_1.pair);
exports.zipAsync = zipWith_1.zipWithAsync(ramda_1.pair);
//# sourceMappingURL=zip.js.map