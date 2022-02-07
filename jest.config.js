module.exports = {
  preset: 'react-native',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
  cacheDirectory: '.jest/cache',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [
      "node_modules/(?!(react-native|react-native-vector-icons)/)"
    ]
};
