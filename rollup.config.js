import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

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
    external: ['react', 'react-dom'],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      postcss({inject: true}),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: '> 0.25%, not dead', // Adjust target environments
              useBuiltIns: 'entry', // Polyfill as needed
              corejs: 3, // Specify core-js version
            },
          ],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-transform-runtime', // Enable runtime helpers
        ],
      }),
    ],
  },
];
