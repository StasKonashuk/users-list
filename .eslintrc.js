module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    //
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  globals: {
    JSX: true,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 0,
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
