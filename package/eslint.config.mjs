import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import prettier from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  jest.configs["flat/recommended"],
  prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
    },
    settings: { react: { version: "detect" } },
    rules: { "react/prop-types": "off" },
  },
];
