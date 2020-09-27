import buble from "@rollup/plugin-buble"

export default [
  {
    input: "src/index.js",
    moduleName: "chavascript-parser",
    plugins: [
      buble({ transforms: { dangerousForOf: true } })
    ],
    sourceMap: true,
    output: [
      {
        file: "dist/chavascript-parser.js",
        formats: "umd"
      },
      {
        file: "dist/chavascript-parser.mjs",
        formats: "es"
      }
    ]
  }
]
