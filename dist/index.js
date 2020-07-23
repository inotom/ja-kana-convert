/*! JaKanaConvert.js v2.0.0 inotom (http://www.serendip.ws/) | MIT */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** @prettier */
var isKatakana = function (c) {
    var code = c.charCodeAt(0);
    // ァ:12449
    // ヶ:12534
    return code >= 12449 && code <= 12534;
};
var isHiragana = function (c) {
    var code = c.charCodeAt(0);
    // ぁ:12353
    // ゖ:12438
    return code >= 12353 && code <= 12438;
};
var KatakanaToHiragana = function (c) {
    if (!isKatakana(c)) {
        return c;
    }
    return String.fromCharCode(c.charCodeAt(0) - 96);
};
var HiraganaToKatakana = function (c) {
    if (!isHiragana(c)) {
        return c;
    }
    return String.fromCharCode(c.charCodeAt(0) + 96);
};
var convertTo = function (str, fn) { return Array.prototype.map.call(str, fn).join(''); };
var toHiragana = function (str) { return convertTo(str, KatakanaToHiragana); };
var toKatakana = function (str) { return convertTo(str, HiraganaToKatakana); };

exports.HiraganaToKatakana = HiraganaToKatakana;
exports.KatakanaToHiragana = KatakanaToHiragana;
exports.isHiragana = isHiragana;
exports.isKatakana = isKatakana;
exports.toHiragana = toHiragana;
exports.toKatakana = toKatakana;
//# sourceMappingURL=index.js.map
