(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.ramdaGenerators = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function _isPlaceholder(a) {
           return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
    }

    /**
     * Optimized internal one-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curry1(fn) {
      return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
          return f1;
        } else {
          return fn.apply(this, arguments);
        }
      };
    }

    /**
     * Optimized internal two-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curry2(fn) {
      return function f2(a, b) {
        switch (arguments.length) {
          case 0:
            return f2;
          case 1:
            return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
              return fn(a, _b);
            });
          default:
            return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
              return fn(_a, b);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
              return fn(a, _b);
            }) : fn(a, b);
        }
      };
    }

    function _arity(n, fn) {
      /* eslint-disable no-unused-vars */
      switch (n) {
        case 0:
          return function () {
            return fn.apply(this, arguments);
          };
        case 1:
          return function (a0) {
            return fn.apply(this, arguments);
          };
        case 2:
          return function (a0, a1) {
            return fn.apply(this, arguments);
          };
        case 3:
          return function (a0, a1, a2) {
            return fn.apply(this, arguments);
          };
        case 4:
          return function (a0, a1, a2, a3) {
            return fn.apply(this, arguments);
          };
        case 5:
          return function (a0, a1, a2, a3, a4) {
            return fn.apply(this, arguments);
          };
        case 6:
          return function (a0, a1, a2, a3, a4, a5) {
            return fn.apply(this, arguments);
          };
        case 7:
          return function (a0, a1, a2, a3, a4, a5, a6) {
            return fn.apply(this, arguments);
          };
        case 8:
          return function (a0, a1, a2, a3, a4, a5, a6, a7) {
            return fn.apply(this, arguments);
          };
        case 9:
          return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return fn.apply(this, arguments);
          };
        case 10:
          return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return fn.apply(this, arguments);
          };
        default:
          throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
      }
    }

    /**
     * Internal curryN function.
     *
     * @private
     * @category Function
     * @param {Number} length The arity of the curried function.
     * @param {Array} received An array of arguments received thus far.
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curryN(length, received, fn) {
      return function () {
        var combined = [];
        var argsIdx = 0;
        var left = length;
        var combinedIdx = 0;
        while (combinedIdx < received.length || argsIdx < arguments.length) {
          var result;
          if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
            result = received[combinedIdx];
          } else {
            result = arguments[argsIdx];
            argsIdx += 1;
          }
          combined[combinedIdx] = result;
          if (!_isPlaceholder(result)) {
            left -= 1;
          }
          combinedIdx += 1;
        }
        return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
      };
    }

    /**
     * Returns a curried equivalent of the provided function, with the specified
     * arity. The curried function has two unusual capabilities. First, its
     * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
     * following are equivalent:
     *
     *   - `g(1)(2)(3)`
     *   - `g(1)(2, 3)`
     *   - `g(1, 2)(3)`
     *   - `g(1, 2, 3)`
     *
     * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
     * "gaps", allowing partial application of any combination of arguments,
     * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
     * the following are equivalent:
     *
     *   - `g(1, 2, 3)`
     *   - `g(_, 2, 3)(1)`
     *   - `g(_, _, 3)(1)(2)`
     *   - `g(_, _, 3)(1, 2)`
     *   - `g(_, 2)(1)(3)`
     *   - `g(_, 2)(1, 3)`
     *   - `g(_, 2)(_, 3)(1)`
     *
     * @func
     * @memberOf R
     * @since v0.5.0
     * @category Function
     * @sig Number -> (* -> a) -> (* -> a)
     * @param {Number} length The arity for the returned function.
     * @param {Function} fn The function to curry.
     * @return {Function} A new, curried function.
     * @see R.curry
     * @example
     *
     *      const sumArgs = (...args) => R.sum(args);
     *
     *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
     *      const f = curriedAddFourNumbers(1, 2);
     *      const g = f(3);
     *      g(4); //=> 10
     */
    var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
      if (length === 1) {
        return _curry1(fn);
      }
      return _arity(length, _curryN(length, [], fn));
    });

    function _identity(x) {
      return x;
    }

    /**
     * A function that does nothing but return the parameter supplied to it. Good
     * as a default or placeholder function.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig a -> a
     * @param {*} x The value to return.
     * @return {*} The input value, `x`.
     * @example
     *
     *      R.identity(1); //=> 1
     *
     *      const obj = {};
     *      R.identity(obj) === obj; //=> true
     * @symb R.identity(a) = a
     */
    var identity = /*#__PURE__*/_curry1(_identity);

    /**
     * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
     *
     * @func
     * @memberOf R
     * @since v0.18.0
     * @category List
     * @sig a -> b -> (a,b)
     * @param {*} fst
     * @param {*} snd
     * @return {Array}
     * @see R.objOf, R.of
     * @example
     *
     *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
     */
    var pair = /*#__PURE__*/_curry2(function pair(fst, snd) {
      return [fst, snd];
    });

    /**
     * Returns a function of arity `n` from a (manually) curried function.
     *
     * @func
     * @memberOf R
     * @since v0.14.0
     * @category Function
     * @sig Number -> (a -> b) -> (a -> c)
     * @param {Number} length The arity for the returned function.
     * @param {Function} fn The function to uncurry.
     * @return {Function} A new function.
     * @see R.curry
     * @example
     *
     *      const addFour = a => b => c => d => a + b + c + d;
     *
     *      const uncurriedAddFour = R.uncurryN(4, addFour);
     *      uncurriedAddFour(1, 2, 3, 4); //=> 10
     */
    var uncurryN = /*#__PURE__*/_curry2(function uncurryN(depth, fn) {
      return curryN(depth, function () {
        var currentDepth = 1;
        var value = fn;
        var idx = 0;
        var endIdx;
        while (currentDepth <= depth && typeof value === 'function') {
          endIdx = currentDepth === depth ? arguments.length : idx + value.length;
          value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
          currentDepth += 1;
          idx = endIdx;
        }
        return value;
      });
    });

    function _scan(fn, init, gen) {
        var gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 1;
                case 1:
                    if (!!gen_1_1.done) return [3 /*break*/, 4];
                    value = gen_1_1.value;
                    return [4 /*yield*/, init = fn(init, value)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }
    function _scanAsync(fn, init, gen) {
        return __asyncGenerator(this, arguments, function _scanAsync_1() {
            var gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(gen_2.next())];
                    case 2:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 6];
                        value = gen_2_1.value;
                        return [4 /*yield*/, __await(init = fn(init, value))];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    }
    var scan = curryN(3, _scan);
    var scanAsync = curryN(3, _scanAsync);

    var scan$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        scan: scan,
        scanAsync: scanAsync
    });

    var accumCounters = function (fn) { return function (acc, el) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[fn(el)] = (acc[fn(el)] || 0) + 1, _a)));
    }; };
    var _countBy = function (fn) { return scan(accumCounters(fn), {}); };
    var _countByAsync = function (fn) { return scanAsync(accumCounters(fn), {}); };
    var countBy = uncurryN(2, _countBy);
    var countByAsync = uncurryN(2, _countByAsync);

    var countBy$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        countBy: countBy,
        countByAsync: countByAsync
    });

    function _debounceBy(fn, gen) {
        var lastKey, gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    lastKey = NaN;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 2;
                case 2:
                    if (!!gen_1_1.done) return [3 /*break*/, 5];
                    value = gen_1_1.value;
                    if (!(lastKey !== (lastKey = fn(value)))) return [3 /*break*/, 4];
                    return [4 /*yield*/, value];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }
    function _debounceByAsync(fn, gen) {
        return __asyncGenerator(this, arguments, function _debounceByAsync_1() {
            var lastKey, gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        lastKey = NaN;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 14]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(gen_2.next())];
                    case 3:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 7];
                        value = gen_2_1.value;
                        if (!(lastKey !== (lastKey = fn(value)))) return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(value)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    }
    var debounceBy = curryN(2, _debounceBy);
    var debounceByAsync = curryN(2, _debounceByAsync);

    var debounceBy$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        debounceBy: debounceBy,
        debounceByAsync: debounceByAsync
    });

    var debounce = debounceBy(identity);
    var debounceAsync = debounceByAsync(identity);

    var debounce$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        debounce: debounce,
        debounceAsync: debounceAsync
    });

    function _dropWhile(cond, gen) {
        var taking, gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    taking = false;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 2;
                case 2:
                    if (!!gen_1_1.done) return [3 /*break*/, 5];
                    value = gen_1_1.value;
                    if (!(taking = taking || !cond(value))) return [3 /*break*/, 4];
                    return [4 /*yield*/, value];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }
    function _dropWhileAsync(cond, gen) {
        return __asyncGenerator(this, arguments, function _dropWhileAsync_1() {
            var taking, gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        taking = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 14]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(gen_2.next())];
                    case 3:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 7];
                        value = gen_2_1.value;
                        if (!(taking = taking || !cond(value))) return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(value)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    }
    var dropWhile = curryN(2, _dropWhile);
    var dropWhileAsync = curryN(2, _dropWhileAsync);

    var dropWhile$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        dropWhile: dropWhile,
        dropWhileAsync: dropWhileAsync
    });

    function _drop(amount, gen) {
        var gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 1;
                case 1:
                    if (!!gen_1_1.done) return [3 /*break*/, 4];
                    value = gen_1_1.value;
                    if (!(amount-- <= 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, value];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }
    function _dropAsync(amount, gen) {
        return __asyncGenerator(this, arguments, function _dropAsync_1() {
            var gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(gen_2.next())];
                    case 2:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 6];
                        value = gen_2_1.value;
                        if (!(amount-- <= 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, __await(value)];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    }
    var drop = curryN(2, _drop);
    var dropAsync = curryN(2, _dropAsync);

    var drop$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        drop: drop,
        dropAsync: dropAsync
    });

    function _filter(cond, gen) {
        var gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 1;
                case 1:
                    if (!!gen_1_1.done) return [3 /*break*/, 4];
                    value = gen_1_1.value;
                    if (!cond(value)) return [3 /*break*/, 3];
                    return [4 /*yield*/, value];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }
    function _filterAsync(cond, gen) {
        return __asyncGenerator(this, arguments, function _filterAsync_1() {
            var gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(gen_2.next())];
                    case 2:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 6];
                        value = gen_2_1.value;
                        if (!cond(value)) return [3 /*break*/, 5];
                        return [4 /*yield*/, __await(value)];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    }
    var filter = curryN(2, _filter);
    var filterAsync = curryN(2, _filterAsync);

    var filter$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        filter: filter,
        filterAsync: filterAsync
    });

    var _find = function (cond, gen) {
        var e_1, _a;
        try {
            for (var gen_1 = __values(gen), gen_1_1 = gen_1.next(); !gen_1_1.done; gen_1_1 = gen_1.next()) {
                var value = gen_1_1.value;
                if (cond(value))
                    return value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    var _findAsync = function (cond, gen) { var gen_2, gen_2_1; return __awaiter(void 0, void 0, void 0, function () {
        var value, e_2_1;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    gen_2 = __asyncValues(gen);
                    _b.label = 1;
                case 1: return [4 /*yield*/, gen_2.next()];
                case 2:
                    if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 4];
                    value = gen_2_1.value;
                    if (cond(value))
                        return [2 /*return*/, value];
                    _b.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 8];
                    return [4 /*yield*/, _a.call(gen_2)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 10: return [7 /*endfinally*/];
                case 11: return [2 /*return*/, null];
            }
        });
    }); };
    var find = curryN(2, _find);
    var findAsync = curryN(2, _findAsync);

    var find$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        find: find,
        findAsync: findAsync
    });

    function _flatMap(fn, gen) {
        var gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 1;
                case 1:
                    if (!!gen_1_1.done) return [3 /*break*/, 4];
                    value = gen_1_1.value;
                    return [5 /*yield**/, __values(fn(value))];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }
    function _flatMapAsync(fn, gen) {
        return __asyncGenerator(this, arguments, function _flatMapAsync_1() {
            var gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(gen_2.next())];
                    case 2:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 6];
                        value = gen_2_1.value;
                        return [5 /*yield**/, __values(__asyncDelegator(__asyncValues(fn(value))))];
                    case 3: return [4 /*yield*/, __await.apply(void 0, [_b.sent()])];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    }
    var flatMap = curryN(2, _flatMap);
    var flatMapAsync = curryN(2, _flatMapAsync);

    var flatMap$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        flatMap: flatMap,
        flatMapAsync: flatMapAsync
    });

    /* eslint-disable no-plusplus,no-console */
    var generate = function (fn, limit) { return ({
        start: function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(!limit || i < limit)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fn(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log("The stream has reached the limit of " + limit + " elements");
                        return [2 /*return*/];
                }
            });
        },
    }); };
    var generateAsync = function (fn, limit) { return ({
        start: function () {
            return __asyncGenerator(this, arguments, function () {
                var i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(!limit || i < limit)) return [3 /*break*/, 6];
                            return [4 /*yield*/, __await(fn(i))];
                        case 2: return [4 /*yield*/, __await.apply(void 0, [_a.sent()])];
                        case 3: return [4 /*yield*/, _a.sent()];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            i++;
                            return [3 /*break*/, 1];
                        case 6:
                            console.log("The stream has reached the limit of " + limit + " elements");
                            return [2 /*return*/];
                    }
                });
            });
        },
    }); };
    var generateFromArray = function (v) { return ({
        start: function () {
            var v_1, v_1_1, el, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        v_1 = __values(v), v_1_1 = v_1.next();
                        _b.label = 1;
                    case 1:
                        if (!!v_1_1.done) return [3 /*break*/, 4];
                        el = v_1_1.value;
                        return [4 /*yield*/, el];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        v_1_1 = v_1.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (v_1_1 && !v_1_1.done && (_a = v_1.return)) _a.call(v_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        },
    }); };

    var generate$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        generate: generate,
        generateAsync: generateAsync,
        generateFromArray: generateFromArray
    });

    var head = function (gen) { var _a; return (_a = gen.next()) === null || _a === void 0 ? void 0 : _a.value; };
    var headAsync = function (gen) { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, gen.next()];
            case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.value];
        }
    }); }); };

    var head$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        head: head,
        headAsync: headAsync
    });

    function last(gen) {
        var e_1, _a;
        var lastElement;
        try {
            for (var gen_1 = __values(gen), gen_1_1 = gen_1.next(); !gen_1_1.done; gen_1_1 = gen_1.next()) {
                var value = gen_1_1.value;
                lastElement = value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return lastElement;
    }
    function lastAsync(gen) {
        var gen_2, gen_2_1;
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var lastElement, value, e_2_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 11]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, gen_2.next()];
                    case 2:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 4];
                        value = gen_2_1.value;
                        lastElement = value;
                        _b.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 11];
                    case 6:
                        _b.trys.push([6, , 9, 10]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 8];
                        return [4 /*yield*/, _a.call(gen_2)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 10: return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, lastElement];
                }
            });
        });
    }

    var last$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        last: last,
        lastAsync: lastAsync
    });

    function _map(fn, gen) {
        var gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 1;
                case 1:
                    if (!!gen_1_1.done) return [3 /*break*/, 4];
                    value = gen_1_1.value;
                    return [4 /*yield*/, fn(value)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }
    function _mapAsync(fn, gen) {
        return __asyncGenerator(this, arguments, function _mapAsync_1() {
            var gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(gen_2.next())];
                    case 2:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 6];
                        value = gen_2_1.value;
                        return [4 /*yield*/, __await(fn(value))];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    }
    var map = curryN(2, _map);
    var mapAsync = curryN(2, _mapAsync);

    var map$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        map: map,
        mapAsync: mapAsync
    });

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
    var periodicFrom = curryN(2, function (ms, list) { return ({
        start: function () { return _periodicFrom(ms, list); },
    }); });
    var periodic = function (ms) { return periodicFrom(ms, function () { return null; }); };

    var periodic$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        periodicFrom: periodicFrom,
        periodic: periodic
    });

    var _range = function (start, end) { return generate(function (id) { return id + start; }, end - start); };
    var range = curryN(2, _range);

    var range$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        range: range
    });

    function _splitEvery(size, gen) {
        var res, gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    res = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, 8, 9]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 2;
                case 2:
                    if (!!gen_1_1.done) return [3 /*break*/, 6];
                    value = gen_1_1.value;
                    if (!(res.length === size)) return [3 /*break*/, 4];
                    return [4 /*yield*/, res];
                case 3:
                    _b.sent();
                    res = [];
                    _b.label = 4;
                case 4:
                    res.push(value);
                    _b.label = 5;
                case 5:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9: return [4 /*yield*/, res];
                case 10:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }
    function _splitEveryAsync(size, gen) {
        return __asyncGenerator(this, arguments, function _splitEveryAsync_1() {
            var res, gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        res = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 9, 10, 15]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(gen_2.next())];
                    case 3:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 8];
                        value = gen_2_1.value;
                        if (!(res.length === size)) return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(res)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        res = [];
                        _b.label = 6;
                    case 6:
                        res.push(value);
                        _b.label = 7;
                    case 7: return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _b.trys.push([10, , 13, 14]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15: return [4 /*yield*/, __await(res)];
                    case 16: return [4 /*yield*/, _b.sent()];
                    case 17:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var splitEvery = curryN(2, _splitEvery);
    var splitEveryAsync = curryN(2, _splitEveryAsync);

    var splitEvery$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        splitEvery: splitEvery,
        splitEveryAsync: splitEveryAsync
    });

    function takeAll(generator) {
        var e_1, _a;
        var res = [];
        try {
            for (var generator_1 = __values(generator), generator_1_1 = generator_1.next(); !generator_1_1.done; generator_1_1 = generator_1.next()) {
                var value = generator_1_1.value;
                res.push(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (generator_1_1 && !generator_1_1.done && (_a = generator_1.return)) _a.call(generator_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    }
    function takeAllAsync(generator) {
        var generator_2, generator_2_1;
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, value, e_2_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        res = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        generator_2 = __asyncValues(generator);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, generator_2.next()];
                    case 3:
                        if (!(generator_2_1 = _b.sent(), !generator_2_1.done)) return [3 /*break*/, 5];
                        value = generator_2_1.value;
                        res.push(value);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _b.trys.push([7, , 10, 11]);
                        if (!(generator_2_1 && !generator_2_1.done && (_a = generator_2.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(generator_2)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/, res];
                }
            });
        });
    }

    var takeAll$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        takeAll: takeAll,
        takeAllAsync: takeAllAsync
    });

    function _takeWhile(cond, gen) {
        var gen_1, gen_1_1, value, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 1;
                case 1:
                    if (!!gen_1_1.done) return [3 /*break*/, 4];
                    value = gen_1_1.value;
                    if (!cond(value))
                        return [3 /*break*/, 4];
                    return [4 /*yield*/, value];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }
    function _takeWhileAsync(cond, gen) {
        return __asyncGenerator(this, arguments, function _takeWhileAsync_1() {
            var gen_2, gen_2_1, value, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(gen_2.next())];
                    case 2:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 6];
                        value = gen_2_1.value;
                        if (!cond(value))
                            return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(value)];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    }
    var takeWhile = curryN(2, _takeWhile);
    var takeWhileAsync = curryN(2, _takeWhileAsync);

    var takeWhile$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        takeWhile: takeWhile,
        takeWhileAsync: takeWhileAsync
    });

    function _take(amount, gen) {
        var e_1, _a;
        var res = [];
        try {
            for (var gen_1 = __values(gen), gen_1_1 = gen_1.next(); !gen_1_1.done; gen_1_1 = gen_1.next()) {
                var value = gen_1_1.value;
                // eslint-disable-next-line no-param-reassign,no-plusplus
                if (amount-- <= 0)
                    break;
                res.push(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    }
    function _takeAsync(amount, gen) {
        var gen_2, gen_2_1;
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, value, e_2_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        res = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, gen_2.next()];
                    case 3:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 5];
                        value = gen_2_1.value;
                        // eslint-disable-next-line no-param-reassign,no-plusplus
                        if (amount-- <= 0)
                            return [3 /*break*/, 5];
                        res.push(value);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _b.trys.push([7, , 10, 11]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(gen_2)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/, res];
                }
            });
        });
    }
    function _takeIterator(amount, gen) {
        var gen_3, gen_3_1, value, e_3_1;
        var e_3, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    gen_3 = __values(gen), gen_3_1 = gen_3.next();
                    _b.label = 1;
                case 1:
                    if (!!gen_3_1.done) return [3 /*break*/, 4];
                    value = gen_3_1.value;
                    // eslint-disable-next-line no-param-reassign,no-plusplus
                    if (amount-- === 0)
                        return [3 /*break*/, 4];
                    return [4 /*yield*/, value];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    gen_3_1 = gen_3.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_3_1 = _b.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (gen_3_1 && !gen_3_1.done && (_a = gen_3.return)) _a.call(gen_3);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/, amount + 1];
            }
        });
    }
    function _takeAsyncIterator(amount, gen) {
        return __asyncGenerator(this, arguments, function _takeAsyncIterator_1() {
            var gen_4, gen_4_1, value, e_4_1;
            var e_4, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        gen_4 = __asyncValues(gen);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(gen_4.next())];
                    case 2:
                        if (!(gen_4_1 = _b.sent(), !gen_4_1.done)) return [3 /*break*/, 6];
                        value = gen_4_1.value;
                        // eslint-disable-next-line no-param-reassign,no-plusplus
                        if (amount-- <= 0)
                            return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(value)];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_4_1 = _b.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(gen_4_1 && !gen_4_1.done && (_a = gen_4.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(gen_4))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_4) throw e_4.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [4 /*yield*/, __await(amount + 1)];
                    case 14: return [2 /*return*/, _b.sent()];
                }
            });
        });
    }
    var take = curryN(2, _take);
    var takeAsync = curryN(2, _takeAsync);
    var takeIterator = curryN(2, _takeIterator);
    var takeAsyncIterator = curryN(2, _takeAsyncIterator);

    var take$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        take: take,
        takeAsync: takeAsync,
        takeIterator: takeIterator,
        takeAsyncIterator: takeAsyncIterator
    });

    function _uniqBy(fn, gen) {
        var unique, gen_1, gen_1_1, value, key, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    unique = new Set();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    gen_1 = __values(gen), gen_1_1 = gen_1.next();
                    _b.label = 2;
                case 2:
                    if (!!gen_1_1.done) return [3 /*break*/, 5];
                    value = gen_1_1.value;
                    key = fn(value);
                    if (!!unique.has(key)) return [3 /*break*/, 4];
                    unique.add(key);
                    return [4 /*yield*/, value];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    gen_1_1 = gen_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (gen_1_1 && !gen_1_1.done && (_a = gen_1.return)) _a.call(gen_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }
    function _uniqByAsync(fn, gen) {
        return __asyncGenerator(this, arguments, function _uniqByAsync_1() {
            var unique, gen_2, gen_2_1, value, key, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        unique = new Set();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 14]);
                        gen_2 = __asyncValues(gen);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(gen_2.next())];
                    case 3:
                        if (!(gen_2_1 = _b.sent(), !gen_2_1.done)) return [3 /*break*/, 7];
                        value = gen_2_1.value;
                        key = fn(value);
                        if (!!unique.has(key)) return [3 /*break*/, 6];
                        unique.add(key);
                        return [4 /*yield*/, __await(value)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(gen_2_1 && !gen_2_1.done && (_a = gen_2.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, __await(_a.call(gen_2))];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    }
    var uniqBy = curryN(2, _uniqBy);
    var uniqByAsync = curryN(2, _uniqByAsync);

    var uniqBy$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        uniqBy: uniqBy,
        uniqByAsync: uniqByAsync
    });



    var utils = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    function _zipWith(fn, gen1, gen2) {
        var value1, value2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value1 = gen1.next();
                    value2 = gen2.next();
                    if (value1.done || value2.done)
                        return [2 /*return*/];
                    return [4 /*yield*/, fn(value1.value, value2.value)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    }
    // eslint-disable-next-line max-len
    function _zipWithAsync(fn, gen1, gen2) {
        return __asyncGenerator(this, arguments, function _zipWithAsync_1() {
            var _a, value1, value2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        return [4 /*yield*/, __await(Promise.all([gen1.next(), gen2.next()]))];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), value1 = _a[0], value2 = _a[1];
                        if (!(value1.done || value2.done)) return [3 /*break*/, 3];
                        return [4 /*yield*/, __await(void 0)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, __await(fn(value1.value, value2.value))];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 0];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    var zipWith = curryN(3, _zipWith);
    var zipWithAsync = curryN(3, _zipWithAsync);

    var zipWith$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        zipWith: zipWith,
        zipWithAsync: zipWithAsync
    });

    var zip = zipWith(pair);
    var zipAsync = zipWithAsync(pair);

    var zip$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        zip: zip,
        zipAsync: zipAsync
    });

    var ramdaGenerators = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, countBy$1), debounceBy$1), debounce$1), dropWhile$1), drop$1), filter$1), find$1), flatMap$1), generate$1), head$1), last$1), map$1), periodic$1), range$1), scan$1), splitEvery$1), takeAll$1), takeWhile$1), take$1), uniqBy$1), utils), zipWith$1), zip$1);

    return ramdaGenerators;

})));
//# sourceMappingURL=ramda-generators.umd.js.map
