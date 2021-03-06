/* eslint-disable import/no-unresolved */
import { task, series, parallel, watch } from "gulp";
import { clean } from "./tasks/clean";

// import { paths } from "./config/paths";
import { lintScss } from "./tasks/scss/lintScss";
import { lintJs } from "./tasks/javascript/lintJs";
import { cssTranspile } from "./tasks/scss/cssTranspile";
import { cssCleanMinify } from "./tasks/scss/cssCleanMinify";
import {
  jsTranspileProd,
  jsTranspileDev,
} from "./tasks/javascript/jsTranspile";
import { removeTemporaryFiles } from "./tasks/removeTemporaryFiles";
// import { deploy } from "./tasks/deploy";

task("clean", clean);
task("clean:frontend", series("clean"));

// LINT
task("lint:styles", lintScss);
task("lint:scripts", lintJs);
task("lint", parallel("lint:styles", "lint:scripts"));

// // BUILD
task("build:styles", cssTranspile);
task("build:scripts:dev", jsTranspileDev);
task("build:scripts:prod", jsTranspileProd);
task("build", parallel("build:styles", "build:scripts:dev"));

// // MINIFY
task("minify:styles", series(cssCleanMinify));
task("minify", series(parallel("minify:styles"), removeTemporaryFiles));

task("build", series("clean", "lint", "build", "minify"));


// WATCH
// task("watch:landing:ui", () => {
//   watch(paths.src.js.jsFiles, series("lint:scripts", "build:scripts:dev"));
//   watch(
//     [...paths.src.css.scssFiles, ...paths.src.css.scssWatchFiles],
//     series("lint:styles", "build:styles", "minify:styles")
//   );
//   watch(
//     [
//       `${paths.src.views.ejsDirectory}/*.ejs`,
//       `${paths.src.views.ejsDirectory}/*/*.ejs`,
//     ],
//     loadEjs
//   );
//   watch(
//     [
//       `${paths.dist.distDir}/${PROJECT_PATH}/*`,
//       `${paths.dist.distDir}/${PROJECT_PATH}/*/*`,
//     ],
//     deploy
//   );
// });

// task(
//   "site",
//   series(
//     "lint:styles",
//     "lint:scripts",
//     "build:markup",
//     "build:styles",
//     "build:scripts:prod",
//     "minify",
//     deploy
//   )
// );
