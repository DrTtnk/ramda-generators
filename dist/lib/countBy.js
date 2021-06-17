"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
var ramda_1 = require("ramda");
var scan_1 = require("./scan");
var accumCounters = function (fn) { return function (acc, el) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[fn(el)] = (acc[fn(el)] || 0) + 1, _a)));
}; };
var _countBy = function (fn) { return scan_1.scan(accumCounters(fn), {}); };
var _countByAsync = function (fn) { return scan_1.scanAsync(accumCounters(fn), {}); };
exports.countBy = ramda_1.uncurryN(2, _countBy);
exports.countByAsync = ramda_1.uncurryN(2, _countByAsync);
//# sourceMappingURL=countBy.js.map