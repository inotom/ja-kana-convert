"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const isKatakana=a=>{const t=a.charCodeAt(0);return t>=12449&&t<=12534},isHiragana=a=>{const t=a.charCodeAt(0);return t>=12353&&t<=12438},KatakanaToHiragana=a=>isKatakana(a)?String.fromCharCode(a.charCodeAt(0)-96):a,HiraganaToKatakana=a=>isHiragana(a)?String.fromCharCode(a.charCodeAt(0)+96):a,convertTo=(a,t)=>Array.prototype.map.call(a,t).join(""),toHiragana=a=>convertTo(a,KatakanaToHiragana),toKatakana=a=>convertTo(a,HiraganaToKatakana);exports.HiraganaToKatakana=HiraganaToKatakana,exports.KatakanaToHiragana=KatakanaToHiragana,exports.isHiragana=isHiragana,exports.isKatakana=isKatakana,exports.toHiragana=toHiragana,exports.toKatakana=toKatakana;
