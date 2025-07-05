import js from "@eslint/js";
import globals from "globals";
import css from "@eslint/css";
import htmlPlugin from "eslint-plugin-html";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended", "plugin:prettier/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended", "plugin:prettier/recommended"]
  },
  {
    files: ["**/*.html"],
    plugins: { html: htmlPlugin, prettier: prettierPlugin },
    extends: ["plugin:html/recommended", "plugin:prettier/recommended"]
  }
]);
