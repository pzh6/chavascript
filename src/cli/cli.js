import { argv } from "./args";
import { promises as fs } from "fs";
import glob from "glob";
import { basename } from "path";
import escodegen from "escodegen";

import { parse } from "../index"

const inputPath = argv._[0];
const inputFiles = argv.isFolder ? glob.sync(`${inputPath}/**/*.chs`) : [inputPath];

// copied from outermost index; TODO: replace with import later on
const transpile = (input, options) => escodegen.generate(parse(input, options));

inputFiles.forEach(filePath => {
    fs.readFile(filePath, { encoding: "utf8" })
        .catch(error => {
            console.error(`could not read file '${filePath}'`, error);
        })
        .then(async fileData => {
            const transpiledData = transpile(fileData);

            const makingDir = fs.mkdir(argv.output, { recursive: true });
            const outpath = argv.output + "/" + basename(filePath).replace(".chs", ".js");

            await makingDir;
            fs.writeFile(outpath, transpiledData)
        })
});
