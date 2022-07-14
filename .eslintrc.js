module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly',
    ROUTES: 'readonly',
  },
  extends: ['alloy', 'alloy/vue'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
};
