/** @prettier */

import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
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
    input: 'src/index.ts',
    output: [
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner,
      },
      // minify.
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        banner,
        plugins: [terser()],
      },
    ],
    // Exclude development modules.
    external: [...Object.keys(pkg.devDependencies || {})],
    plugins: [resolve(), typescript(), commonjs({ extensions: ['.ts', '.js'] }), buble()],
  },
  // Options for module.
  {
    input: 'src/index.ts',
    output: [
      // CommonJS
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        banner,
      },
      // ES Modules
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        banner,
      },
    ],
    // Exclude other modules.
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})],
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      commonjs(),
      resolve(),
    ],
  },
];
