import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ...nextPlugin.flatConfig.coreWebVitals,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];
