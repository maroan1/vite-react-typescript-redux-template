module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:compat/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest-dom/recommended',
    'plugin:react-redux/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unicorn',
    'jest-dom',
    'react-redux',
    'sonarjs',
  ],
  rules: {
    'unicorn/prefer-module': 0,
    'unicorn/filename-case': 0,
    'unicorn/prevent-abbreviations': 1,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
