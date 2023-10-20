module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': 'off', 
    'no-undef': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
};