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
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue'],
  rules: {},
};
