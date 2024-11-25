import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        exports: 'auto',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      postcss({inject: true}), // Inject CSS directly into JS
    ],
  },
];
