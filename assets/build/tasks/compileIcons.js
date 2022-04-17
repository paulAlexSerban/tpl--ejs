import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import { paths } from "../config/paths";

export const compileIcons = () => {
  return src(`${paths.entries}/icons/*`)
    .pipe(plumber())
    .pipe(dest([`${paths.dist}/icons`]));
};
