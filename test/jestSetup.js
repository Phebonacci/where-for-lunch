module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^client/(.*)': '<rootDir>/../client/$1',
    '^server/(.*)': '<rootDir>/../server/$1',
    '^components/(.*)': '<rootDir>/../client/components/$1',
    '^containers/(.*)': '<rootDir>/../client/containers/$1',
    '^actions(.*)': '<rootDir>/../client/actions$1',
    '^reducers(.*)': '<rootDir>/../client/reducers$1',
    '^sagas(.*)': '<rootDir>/../client/sagas$1',
    '^services(.*)': '<rootDir>/../client/services$1',
    '^constants(.*)': '<rootDir>/../client/constants$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsStubber.js',
    '\\.(css)$': 'identity-obj-proxy',
  },
  moduleDirectories: [
    'node_modules',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/setup.js',
};
