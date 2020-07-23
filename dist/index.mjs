/*! JaKanaConvert.js v2.0.0 inotom (http://www.serendip.ws/) | MIT */
/** @prettier */
const isKatakana = (c) => {
    const code = c.charCodeAt(0);
    // ァ:12449
    // ヶ:12534
    return code >= 12449 && code <= 12534;
};
const isHiragana = (c) => {
    const code = c.charCodeAt(0);
    // ぁ:12353
    // ゖ:12438
    return code >= 12353 && code <= 12438;
};
const KatakanaToHiragana = (c) => {
    if (!isKatakana(c)) {
        return c;
    }
    return String.fromCharCode(c.charCodeAt(0) - 96);
};
const HiraganaToKatakana = (c) => {
    if (!isHiragana(c)) {
        return c;
    }
    return String.fromCharCode(c.charCodeAt(0) + 96);
};
const convertTo = (str, fn) => Array.prototype.map.call(str, fn).join('');
const toHiragana = (str) => convertTo(str, KatakanaToHiragana);
const toKatakana = (str) => convertTo(str, HiraganaToKatakana);

export { HiraganaToKatakana, KatakanaToHiragana, isHiragana, isKatakana, toHiragana, toKatakana };
//# sourceMappingURL=index.mjs.map
