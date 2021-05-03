module.exports = {
  rules: {
    'non-offensive-terms': require('./non-offensive-terms'),
  },
  configs: {
    js: {
      plugins: ['prettier'],
      extends: ['prettier'],
      rules: {
        'non-offensive-terms': 'error',
      },
    },
    react: {
      extends: [
        'airbnb',
        'plugin:fs-react-sample/js',
        'plugin:react-hooks/recommended',
      ],
      plugins: ['fs-react-sample', 'react-hooks'],
      overrides: {
        'import/prefer-default-export': 0,
      }
    }
  }
