module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": ["warn", { code: 165 }],
    "object-curly-spacing": "off",
    quotes: "off",
    "quote-props": "off",
    "linebreak-style": "off",
    "no-undef": "off",
    "import/extensions": "off",
    "no-mixed-operators": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-unused-expressions": ["warn", { allowTernary: true }],
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
    "no-shadow": "off",
    "no-param-reassign": "off",
    "no-useless-escape": "off",
    "no-nested-ternary": "off",
  },
};
