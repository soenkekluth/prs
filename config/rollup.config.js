import fs from 'fs';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
// import babel from 'rollup-plugin-babel';
// import path from 'path';
// import eslint from 'rollup-plugin-eslint';
// import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV || 'development';

const pkg = JSON.parse(fs.readFileSync('./package.json'));
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];
// const external = [];
const now = new Date();

const banner = `/*!
* ${pkg.name} v${pkg.version}
* https://github.com/${pkg.repository.url}
*
* Copyright (c) ${now.getFullYear()} Sönke Kluth
* Released under the ${pkg.license} license
*
* Date: ${now.toISOString()}
*/
`;

const resolver = {
  jsnext: true,
  main: true,
  browser: false,
};

const common = {
  banner,
  sourcemap: true,
  exports: 'named',
};

const config = [
  {
    input: './src/index.js',
    external,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        ...common,
      },
      {
        file: pkg.module,
        format: 'es',
        ...common,
      },
      // {
      //   file: pkg['umd:main'],
      //   format: 'umd',
      //   name: pkg.name,
      //   ...common,
      // },
    ],
    plugins: [
      commonjs(),
      resolve(resolver),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      // buble({ transform: { module: false } }),
      buble(),
      // babel({
      //   exclude: "node_modules/**"
      // }),
    ],
  },
];

export default config;
