import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'
import resolve from '@rollup/plugin-node-resolve';
//import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json' assert { type: "json" };

export default {
    input: 'src/index.ts',
    output: [{ file: pkg.main, format: 'es', sourcemap: true }],
    external: Object.keys(pkg.devDependencies).concat(["classnames"]),
    plugins: [
        sass({
            output: 'dist/bundle.css'
        }),
        typescript({ useTsconfigDeclarationDir: true }),
        // commonjs({
        //     include: "/node_modules/",
        //     requireReturnsDefault: "auto",
        // }),
        resolve({
            browser: true
        }),
    ],
}