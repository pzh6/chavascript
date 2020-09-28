import * as yargs from "yargs";

export const argv = yargs.command("test")
    .usage("chavascript-parser <input-path> [-f] ...")
    .demandCommand(1, "must specify input path")
    .option("chsConfig", {
        alias: ["c", "config", "chavascriptConfig"],
        description: "chavascript transpilation configuration file"
    })
    .option("is-folder", {
        alias: ["f", "folder", "d", "dir"],
        type: "boolean",
        description: "specify the given path is to a folder (all files in it will be transpiled recursively)"
    })
    .option("output", {
        alias: ["o", "out", "outDir"],
        default: "./dist",
        type: "string",
        description: "transpilation output folder"
    })
    .help()
    .alias("help", "h")
    .argv;
