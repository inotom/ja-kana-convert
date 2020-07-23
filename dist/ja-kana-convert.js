/*! JaKanaConvert.js v2.0.0 inotom (http://www.serendip.ws/) | MIT */
var JaKanaConvert = (function () {
	'use strict';

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

	return src;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEta2FuYS1jb252ZXJ0LmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBwcmV0dGllciAqL1xuXG5leHBvcnQgY29uc3QgaXNLYXRha2FuYSA9IChjOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgY29kZSA9IGMuY2hhckNvZGVBdCgwKTtcbiAgLy8g44KhOjEyNDQ5XG4gIC8vIOODtjoxMjUzNFxuICByZXR1cm4gY29kZSA+PSAxMjQ0OSAmJiBjb2RlIDw9IDEyNTM0O1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSGlyYWdhbmEgPSAoYzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGNvZGUgPSBjLmNoYXJDb2RlQXQoMCk7XG4gIC8vIOOBgToxMjM1M1xuICAvLyDjgpY6MTI0MzhcbiAgcmV0dXJuIGNvZGUgPj0gMTIzNTMgJiYgY29kZSA8PSAxMjQzODtcbn07XG5cbmV4cG9ydCBjb25zdCBLYXRha2FuYVRvSGlyYWdhbmEgPSAoYzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKCFpc0thdGFrYW5hKGMpKSB7XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApIC0gOTYpO1xufTtcblxuZXhwb3J0IGNvbnN0IEhpcmFnYW5hVG9LYXRha2FuYSA9IChjOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoIWlzSGlyYWdhbmEoYykpIHtcbiAgICByZXR1cm4gYztcbiAgfVxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyA5Nik7XG59O1xuXG50eXBlIENvbnZlcnRlciA9IChzdHI6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5jb25zdCBjb252ZXJ0VG8gPSAoc3RyOiBzdHJpbmcsIGZuOiBDb252ZXJ0ZXIpID0+IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChzdHIsIGZuKS5qb2luKCcnKTtcblxuZXhwb3J0IGNvbnN0IHRvSGlyYWdhbmEgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gY29udmVydFRvKHN0ciwgS2F0YWthbmFUb0hpcmFnYW5hKTtcblxuZXhwb3J0IGNvbnN0IHRvS2F0YWthbmEgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gY29udmVydFRvKHN0ciwgSGlyYWdhbmFUb0thdGFrYW5hKTtcbiJdLCJuYW1lcyI6WyJjb25zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBOzs7Q0FFYSxrQkFBVSxhQUFJLENBQVM7S0FDbENBLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7OztLQUc3QixPQUFPLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQztDQUN4QyxDQUFDLENBQUM7Q0FFVyxrQkFBVSxhQUFJLENBQVM7S0FDbENBLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7OztLQUc3QixPQUFPLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQztDQUN4QyxDQUFDLENBQUM7Q0FFVywwQkFBa0IsYUFBSSxDQUFTO0tBQzFDLElBQUksQ0FBQyxrQkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2xCLE9BQU8sQ0FBQyxDQUFDO01BQ1Y7S0FDRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztDQUNuRCxDQUFDLENBQUM7Q0FFVywwQkFBa0IsYUFBSSxDQUFTO0tBQzFDLElBQUksQ0FBQyxrQkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2xCLE9BQU8sQ0FBQyxDQUFDO01BQ1Y7S0FDRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztDQUNuRCxDQUFDLENBQUM7Q0FJRkEsSUFBTSxTQUFTLGFBQUksR0FBVyxFQUFFLEVBQWEsV0FBSyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUMsQ0FBQztDQUVoRixrQkFBVSxhQUFJLEdBQVcsV0FBYSxTQUFTLENBQUMsR0FBRyxFQUFFLDBCQUFrQixJQUFDLENBQUM7Q0FFekUsa0JBQVUsYUFBSSxHQUFXLFdBQWEsU0FBUyxDQUFDLEdBQUcsRUFBRSwwQkFBa0IsSUFBQyxDQUFDOzs7Ozs7Ozs7OyJ9
