/** @prettier */

import { terser } from 'rollup-plugin-terser';

const plugins = [terser()];

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
    },
    {
      file: './dist/ja-kana-convert.min.js',
      format: 'iife',
      name: 'JaKanaConvert',
    },
  ],
  plugins,
};
