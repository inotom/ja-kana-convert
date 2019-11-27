/** @prettier */

import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    babelrc: true,
  }),
  terser(),
];

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
  external: ['core-js/modules/es.array.join', 'core-js/modules/es.array.map'],
  plugins,
};
