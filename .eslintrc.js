module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint'
    ],
    extends: [
      'airbnb-base', 
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors', 
      'plugin:import/warnings', 
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 0,
      'no-underscore-dangle': 'off',
      'prefer-regex-literals': 'off',
      'no-use-before-define': 'off',
      'no-useless-concat': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: [
            '.js',
            // '.jsx',
            '.ts',
            // '.tsx',
          ],
        },
      },
    },
  };
  