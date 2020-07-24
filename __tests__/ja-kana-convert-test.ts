/** @prettier */

import { isKatakana, isHiragana, toKatakana, toHiragana } from '#/index.ts';

const katakanaChars =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュョヮ';
const hiraganaChars =
  'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんゔがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉっゃゅょゎ';

katakanaChars.split('').forEach((c) => {
  test(`カタカナ「${c}」の判別`, () => {
    expect(isKatakana(c)).toBeTruthy();
    expect(isHiragana(c)).toBeFalsy();
  });
});

hiraganaChars.split('').forEach((c) => {
  test(`ひらがな「${c}」の判別`, () => {
    expect(isHiragana(c)).toBeTruthy();
    expect(isKatakana(c)).toBeFalsy();
  });
});

test('カタカナをひらがなに変換', () => {
  expect(toHiragana(katakanaChars)).toBe(hiraganaChars);
});

test('ひらがなをカタカナに変換', () => {
  expect(toKatakana(hiraganaChars)).toBe(katakanaChars);
});
