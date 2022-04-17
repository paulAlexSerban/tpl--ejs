import { task, parallel, series } from "gulp";
import { compileIcons } from "./tasks/compileIcons";
import { createImageRenditions } from "./tasks/createImageRenditions";
import { compileSvgs } from "./tasks/compileSvgs";
import { clean } from "./tasks/clean";
import { loadVideos } from "./tasks/loadVideos";

//CLEAN
task("clean", clean);
task("clean:assets", series("clean"));

// COMPILE
task("compile", series("clean", parallel(compileIcons, createImageRenditions, compileSvgs, loadVideos)));
task("compile:assets", series("compile"));

// SITE
task("site", series("compile"));
