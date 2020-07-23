/*! JaKanaConvert.js v2.0.0 inotom (http://www.serendip.ws/) | MIT */
function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var src = createCommonjsModule(function (module, exports) {
/** @prettier */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKatakana = exports.toHiragana = exports.HiraganaToKatakana = exports.KatakanaToHiragana = exports.isHiragana = exports.isKatakana = void 0;
exports.isKatakana = function (c) {
    var code = c.charCodeAt(0);
    // ァ:12449
    // ヶ:12534
    return code >= 12449 && code <= 12534;
};
exports.isHiragana = function (c) {
    var code = c.charCodeAt(0);
    // ぁ:12353
    // ゖ:12438
    return code >= 12353 && code <= 12438;
};
exports.KatakanaToHiragana = function (c) {
    if (!exports.isKatakana(c)) {
        return c;
    }
    return String.fromCharCode(c.charCodeAt(0) - 96);
};
exports.HiraganaToKatakana = function (c) {
    if (!exports.isHiragana(c)) {
        return c;
    }
    return String.fromCharCode(c.charCodeAt(0) + 96);
};
var convertTo = function (str, fn) { return Array.prototype.map.call(str, fn).join(''); };
exports.toHiragana = function (str) { return convertTo(str, exports.KatakanaToHiragana); };
exports.toKatakana = function (str) { return convertTo(str, exports.HiraganaToKatakana); };

});

export default src;
//# sourceMappingURL=index.es.js.map
