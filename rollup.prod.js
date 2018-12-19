import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'Log4s',
      file: pkg.browser,
      format: 'umd',
      banner: `/*@preserve ${pkg.name} version ${pkg.version}*/`
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      }),
      uglify({
        output: {
          comments: 'some'
        }
      }),
      filesize()
    ]
  },
  {
    input: 'src/main.js',
    output: [{
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
    ]
  }
]
