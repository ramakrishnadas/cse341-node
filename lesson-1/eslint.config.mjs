import globals from "globals";
import pluginJs from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs", globals: {...globals.node}}},
  pluginJs.configs.recommended,
  {languageOptions: {
    globals: {
      browser: true,
      es2021: true,
      jest: true
    }}
  },
  prettierRecommended
];