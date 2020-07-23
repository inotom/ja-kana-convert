/** @prettier */

import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';

import camelCase from 'lodash.camelcase';
import upperFirst from 'lodash.upperfirst';

import pkg from './package.json';

// Remove npm package scope.
const moduleName = upperFirst(camelCase(pkg.name.replace(/^\@.*\//, '')));

const banner = `/*! ${moduleName}.js v${pkg.version} ${pkg.author} | ${pkg.license} */`;

export default [
  // Options for browser.
  {
    // エントリポイント
    input: 'src/index.ts',
    output: [
      // minifyせずに出力する
      {
        // exportされたモジュールを格納する変数
        name: moduleName,
        // 出力先ファイル
        file: pkg.browser,
        // ブラウザ用フォーマット
        format: 'iife',
        // ソースマップをインラインで出力
        sourcemap: 'inline',
        // copyright
        banner,
      },
      // minifyして出力する
      {
        name: moduleName,
        // minifyするので.minを付与する
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        banner,
        // minify用プラグインを追加で実行する
        plugins: [terser()],
      },
    ],
    // 開発用モジュールは含めない
    external: [...Object.keys(pkg.devDependencies || {})],
    plugins: [resolve(), typescript(), commonjs({ extensions: ['.ts', '.js'] }), buble()],
  },
  // Options for module.
  {
    input: 'src/index.ts',
    output: [
      // CommonJS用出力
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        banner,
      },
      // ESモジュール用出力
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        banner,
      },
    ],
    // 他モジュールは含めない
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})],
    plugins: [resolve(), typescript(), commonjs({ extensions: ['.ts', '.js'] })],
  },
  //input: './src/index.js',
  //output: [
  //  {
  //    file: './dist/index.js',
  //    format: 'cjs',
  //  },
  //  {
  //    file: './dist/ja-kana-convert.min.js',
  //    format: 'iife',
  //    name: 'JaKanaConvert',
  //  },
  //],
  //external: ['core-js/modules/es.array.join', 'core-js/modules/es.array.map'],
  //plugins,
];
