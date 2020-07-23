/*! JaKanaConvert.js v2.0.0 inotom (http://www.serendip.ws/) | MIT */
var JaKanaConvert = (function (exports) {
  'use strict';

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

  return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEta2FuYS1jb252ZXJ0LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
