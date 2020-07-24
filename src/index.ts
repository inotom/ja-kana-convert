/** @prettier */

export const isKatakana = (c: string): boolean => {
  const code = c.charCodeAt(0);
  // ァ:12449
  // ヶ:12534
  return code >= 12449 && code <= 12534;
};

export const isHiragana = (c: string): boolean => {
  const code = c.charCodeAt(0);
  // ぁ:12353
  // ゖ:12438
  return code >= 12353 && code <= 12438;
};

export const KatakanaToHiragana = (c: string): string => {
  if (!isKatakana(c)) {
    return c;
  }
  return String.fromCharCode(c.charCodeAt(0) - 96);
};

export const HiraganaToKatakana = (c: string): string => {
  if (!isHiragana(c)) {
    return c;
  }
  return String.fromCharCode(c.charCodeAt(0) + 96);
};

type Converter = (str: string) => string;

const convertTo = (str: string, fn: Converter) => Array.prototype.map.call(str, fn).join('');

export const toHiragana = (str: string): string => convertTo(str, KatakanaToHiragana);

export const toKatakana = (str: string): string => convertTo(str, HiraganaToKatakana);
