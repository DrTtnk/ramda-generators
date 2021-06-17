"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
var sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
// eslint-disable-next-line complexity
function _periodicFrom(ms, list) {
    return __asyncGenerator(this, arguments, function _periodicFrom_1() {
        var list_1, list_1_1, el, e_1_1, _a, _b, el, e_2_1;
        var e_1, _c, e_2, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!(list instanceof Function)) return [3 /*break*/, 6];
                    _e.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 5];
                    return [4 /*yield*/, __await(list())];
                case 2: return [4 /*yield*/, _e.sent()];
                case 3:
                    _e.sent();
                    return [4 /*yield*/, __await(sleep(ms))];
                case 4:
                    _e.sent();
                    return [3 /*break*/, 1];
                case 5: return [3 /*break*/, 32];
                case 6:
                    if (!(list instanceof Array)) return [3 /*break*/, 17];
                    _e.label = 7;
                case 7:
                    _e.trys.push([7, 14, 15, 16]);
                    list_1 = __values(list), list_1_1 = list_1.next();
                    _e.label = 8;
                case 8:
                    if (!!list_1_1.done) return [3 /*break*/, 13];
                    el = list_1_1.value;
                    return [4 /*yield*/, __await(el)];
                case 9: return [4 /*yield*/, _e.sent()];
                case 10:
                    _e.sent();
                    return [4 /*yield*/, __await(sleep(ms))];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12:
                    list_1_1 = list_1.next();
                    return [3 /*break*/, 8];
                case 13: return [3 /*break*/, 16];
                case 14:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 16];
                case 15:
                    try {
                        if (list_1_1 && !list_1_1.done && (_c = list_1.return)) _c.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 16: return [3 /*break*/, 32];
                case 17:
                    if (!(typeof list === "object" && "start" in list)) return [3 /*break*/, 28];
                    _e.label = 18;
                case 18:
                    _e.trys.push([18, 25, 26, 27]);
                    _a = __values(list.start()), _b = _a.next();
                    _e.label = 19;
                case 19:
                    if (!!_b.done) return [3 /*break*/, 24];
                    el = _b.value;
                    return [4 /*yield*/, __await(el)];
                case 20: return [4 /*yield*/, _e.sent()];
                case 21:
                    _e.sent();
                    return [4 /*yield*/, __await(sleep(ms))];
                case 22:
                    _e.sent();
                    _e.label = 23;
                case 23:
                    _b = _a.next();
                    return [3 /*break*/, 19];
                case 24: return [3 /*break*/, 27];
                case 25:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 27];
                case 26:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 27: return [3 /*break*/, 32];
                case 28:
                    if (!true) return [3 /*break*/, 32];
                    return [4 /*yield*/, __await(list)];
                case 29: return [4 /*yield*/, _e.sent()];
                case 30:
                    _e.sent();
                    return [4 /*yield*/, __await(sleep(ms))];
                case 31:
                    _e.sent();
                    return [3 /*break*/, 28];
                case 32: return [2 /*return*/];
            }
        });
    });
}
exports.periodicFrom = ramda_1.curryN(2, function (ms, list) { return ({
    start: function () { return _periodicFrom(ms, list); },
}); });
exports.periodic = function (ms) { return exports.periodicFrom(ms, function () { return null; }); };
//# sourceMappingURL=periodic.js.map