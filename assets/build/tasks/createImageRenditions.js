import gulpResponsive from "gulp-responsive";
import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import { paths } from "../config/paths";

const imgRenditionConf = {
  "*": [
    {
      width: 320,
      rename: {
        suffix: "-320px",
        extname: ".webp",
      },
    },
    {
      width: 480,
      rename: { 
        suffix: "-480px", 
        extname: ".webp" },
    },
    {
      width: 960,
      rename: { 
        suffix: "-960px", 
        extname: ".webp" },
    },
    {
      width: 1440,
      rename: { 
        suffix: "-1440px", 
        extname: ".webp" },
    },
    {
      width: 1920,
      rename: { 
        suffix: "-1920px", 
        extname: ".webp" },
    },
    {
      rename: { 
        suffix: "-original", 
        extname: ".webp" },
    },
  ]
};


export const createImageRenditions = () => {
  return src(`${paths.entries}/images/*`)
    .pipe(plumber())
    .pipe(
      gulpResponsive(imgRenditionConf, {
        quality: 85,
        progressive: true,
        withMetadata: false,
        withoutEnlargement: false
      })
    )
    .pipe(dest([`${paths.dist}/images`]));
};