const isColor = (token) => token.attributes.category === 'color';
const isBaseColor  = (token) => isColor(token)
  && token.filePath.includes('base.tokens.json');

module.exports = {
  source: ['**/*.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'fem',
      buildPath: 'dist/css/',
      files: [
        {
          destination: '_colors.css',
          format: 'css/variables',
          filter: (token) => !isBaseColor(token),
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      prefix: 'fem',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
          filter: (token) => !isColor(token),
        },
      ],
    },
  },
}
