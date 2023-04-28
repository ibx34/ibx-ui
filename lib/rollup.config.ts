import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'

import pkg from './package.json' assert { type: "json" };

export default {
    input: 'src/index.ts',
    output: [{ file: pkg.main, format: 'es', sourcemap: true }],
    external: Object.keys(pkg.devDependencies),
    plugins: [
        sass({
            output: 'dist/bundle.css'
        }),
        typescript({ useTsconfigDeclarationDir: true }),
    ],
}