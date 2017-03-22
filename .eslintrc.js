module.exports = {
  root: true,
  parser: "lightscript-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  rules: {
    "no-var": 0,
    "max-len": 0
  },
  env: {
    node: true,
    mocha: true
  }
};
