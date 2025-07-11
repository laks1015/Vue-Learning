module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser', // 👈 Add this line
  parserOptions: {
    parser: '@babel/eslint-parser', // 👈 Updated from 'babel-eslint' (deprecated)
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
