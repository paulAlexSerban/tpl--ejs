import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import { paths } from "../config/paths";

export const loadVideos = () => {
  return src(`${paths.entries}/videos/*`)
    .pipe(plumber())
    .pipe(dest([`${paths.dist}/videos`]));
};