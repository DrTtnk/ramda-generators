"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
var generate_1 = require("./generate");
var _range = function (start, end) { return generate_1.generate(function (id) { return id + start; }, end - start); };
exports.range = ramda_1.curryN(2, _range);
//# sourceMappingURL=range.js.map