module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Recognize global variables and functions provided by testing frameworks like Jest
    // like: describe, it, expect
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/*.test.js', '**/*.spec.js'], // Update this pattern based on your test file naming convention
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: [
          '**/__mocks__/**', // jest pattern
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'test.{js,jsx}', // repos with a single test fil
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/.eslintrc.cjs', // eslint config
        ],
        optionalDependencies: false,
      },
    ],
  },
};
