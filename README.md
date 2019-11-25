# ja-kana-convert

Convert hiragana/katakana string.


## Install

```
$ npm install -D @inotom/ja-kana-convert
```


## Usage

### Browser

```html
<script src="ja-kana-convert.min.js"></script>
<script>
console.log(JaKanaConvert.toKatakana('ひらがなをカタカナに'));
console.log(JaKanaConvert.toHiragana('カタカナをひらがなに'));
</script>
```

### Node.js

```js
import { toKatakana, toHiragana } from '@inotom/ja-kana-convert';
console.log(toKatakana('ひらがなをカタカナに'));
console.log(toHiragana('カタカナをひらがなに'));
```


## License

MIT


## Author

inotom
