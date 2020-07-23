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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEta2FuYS1jb252ZXJ0LmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBwcmV0dGllciAqL1xuXG5leHBvcnQgY29uc3QgaXNLYXRha2FuYSA9IChjOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgY29kZSA9IGMuY2hhckNvZGVBdCgwKTtcbiAgLy8g44KhOjEyNDQ5XG4gIC8vIOODtjoxMjUzNFxuICByZXR1cm4gY29kZSA+PSAxMjQ0OSAmJiBjb2RlIDw9IDEyNTM0O1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSGlyYWdhbmEgPSAoYzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGNvZGUgPSBjLmNoYXJDb2RlQXQoMCk7XG4gIC8vIOOBgToxMjM1M1xuICAvLyDjgpY6MTI0MzhcbiAgcmV0dXJuIGNvZGUgPj0gMTIzNTMgJiYgY29kZSA8PSAxMjQzODtcbn07XG5cbmV4cG9ydCBjb25zdCBLYXRha2FuYVRvSGlyYWdhbmEgPSAoYzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKCFpc0thdGFrYW5hKGMpKSB7XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApIC0gOTYpO1xufTtcblxuZXhwb3J0IGNvbnN0IEhpcmFnYW5hVG9LYXRha2FuYSA9IChjOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoIWlzSGlyYWdhbmEoYykpIHtcbiAgICByZXR1cm4gYztcbiAgfVxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyA5Nik7XG59O1xuXG50eXBlIENvbnZlcnRlciA9IChzdHI6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5jb25zdCBjb252ZXJ0VG8gPSAoc3RyOiBzdHJpbmcsIGZuOiBDb252ZXJ0ZXIpID0+IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChzdHIsIGZuKS5qb2luKCcnKTtcblxuZXhwb3J0IGNvbnN0IHRvSGlyYWdhbmEgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gY29udmVydFRvKHN0ciwgS2F0YWthbmFUb0hpcmFnYW5hKTtcblxuZXhwb3J0IGNvbnN0IHRvS2F0YWthbmEgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gY29udmVydFRvKHN0ciwgSGlyYWdhbmFUb0thdGFrYW5hKTtcbiJdLCJuYW1lcyI6WyJjb25zdCJdLCJtYXBwaW5ncyI6Ijs7OztJQUFBO1FBRWEsVUFBVSxhQUFJLENBQVM7UUFDbENBLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7OztRQUc3QixPQUFPLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQztJQUN4QyxFQUFFO1FBRVcsVUFBVSxhQUFJLENBQVM7UUFDbENBLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7OztRQUc3QixPQUFPLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQztJQUN4QyxFQUFFO1FBRVcsa0JBQWtCLGFBQUksQ0FBUztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRCxFQUFFO1FBRVcsa0JBQWtCLGFBQUksQ0FBUztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRCxFQUFFO0lBSUZBLElBQU0sU0FBUyxhQUFJLEdBQVcsRUFBRSxFQUFhLFdBQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFDLENBQUM7UUFFaEYsVUFBVSxhQUFJLEdBQVcsV0FBYSxTQUFTLENBQUMsR0FBRyxFQUFFLGtCQUFrQixLQUFFO1FBRXpFLFVBQVUsYUFBSSxHQUFXLFdBQWEsU0FBUyxDQUFDLEdBQUcsRUFBRSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7OzsifQ==
