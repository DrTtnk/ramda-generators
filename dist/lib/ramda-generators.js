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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore file */
var countBy = __importStar(require("./countBy"));
var debounceBy = __importStar(require("./debounceBy"));
var debounce = __importStar(require("./debounce"));
var dropWhile = __importStar(require("./dropWhile"));
var drop = __importStar(require("./drop"));
var filter = __importStar(require("./filter"));
var find = __importStar(require("./find"));
var flatMap = __importStar(require("./flatMap"));
var generate = __importStar(require("./generate"));
var head = __importStar(require("./head"));
var last = __importStar(require("./last"));
var map = __importStar(require("./map"));
var periodic = __importStar(require("./periodic"));
var range = __importStar(require("./range"));
var scan = __importStar(require("./scan"));
var splitEvery = __importStar(require("./splitEvery"));
var takeAll = __importStar(require("./takeAll"));
var takeWhile = __importStar(require("./takeWhile"));
var take = __importStar(require("./take"));
var uniqBy = __importStar(require("./uniqBy"));
var utils = __importStar(require("./utils"));
var zipWith = __importStar(require("./zipWith"));
var zip = __importStar(require("./zip"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, countBy), debounceBy), debounce), dropWhile), drop), filter), find), flatMap), generate), head), last), map), periodic), range), scan), splitEvery), takeAll), takeWhile), take), uniqBy), utils), zipWith), zip);
//# sourceMappingURL=ramda-generators.js.map