import buble from "@rollup/plugin-buble"

export default [
  {
    input: "src/index.js",
    moduleName: "chavascript-parser",
    plugins: [
      buble({transforms: { dangerousForOf: true }})
    ],
    output: [
      {
        file: "dist/chavascript-parser.js",
        name: "chavascript-parser",
        sourcemap: true,
        format: "umd"
      },
      {
        file: "dist/chavascript-parser.mjs",
        sourcemap: true,
        format: "es"
      }
    ]
  }
]
