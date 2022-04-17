
export const PARENT_DIR = "frontend";
export const PROJECT_NAME = "fe.landing";
export const PROJECT_PATH = `./${PARENT_DIR}/${PROJECT_NAME}/`;
export const SRC_DIR = `${PROJECT_PATH}/source`;
export const DIST_DIR = `${PROJECT_PATH}/dist`;

export const paths = {
  src: {
    styles: {
      scssFiles: [
        `./${PARENT_DIR}/${SRC_DIR}/frontend/scss/*/*/*/*.scss`,
      ],
      scssWatchFiles: [
        `./${PARENT_DIR}/${SRC_DIR}/frontend/scss/*/*.scss`,
        `./${PARENT_DIR}/${SRC_DIR}/frontend/scss/*/*/*.scss`,
        `./${PARENT_DIR}/${SRC_DIR}/frontend/scss/*/*/*/*.scss`,
        `./${PARENT_DIR}/${SRC_DIR}/frontend/scss/*/*/*/*/*.scss`,
        `./${PARENT_DIR}/${SRC_DIR}/frontend/scss/*/*/*/*/*/*.scss`,
      ],
      scssEntries: [
        `./${PARENT_DIR}/${SRC_DIR}/frontend/scss/modules/layout/pages/*.scss`,
      ],
      cssEntries: [
        `${DIST_DIR}/*/*/styles/.tmp/*.page.css`,
        `${DIST_DIR}/*/*/styles/.tmp/*.template.css`,
      ],
      rawCssEntries: `${DIST_DIR}/*/*/.tmp/*.css`,
    },
    javascript: {
      jsFiles: [
        `./${PARENT_DIR}/${SRC_DIR}/frontend/javascript/abstracts/*/*.js`,
        `./${PARENT_DIR}/${SRC_DIR}/frontend/javascript/modules/components/*/*.js`,
        `./${PARENT_DIR}/${SRC_DIR}/frontend/javascript/modules/structure/*/*.js`,
      ],
      jsEntries: [
        `./${PARENT_DIR}/${SRC_DIR}/frontend/javascript/modules/structure/pages/*.page.js`,
      ],
    },
  },
  dist: `${DIST_DIR}`
};
