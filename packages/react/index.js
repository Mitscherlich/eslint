module.exports = {
  extends: [
    'plugin:react/recommended',
    '@m9ch/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
  },
}
