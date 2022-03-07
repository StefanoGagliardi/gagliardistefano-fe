// module.exports = {
//   roots: ['<rootDir>'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
//   testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
//   transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'babel-jest',
//   },
//   watchPlugins: [
//     'jest-watch-typeahead/filename',
//     'jest-watch-typeahead/testname',
//   ],
//   moduleNameMapper: {
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
//   },
//   preset: '@babel/preset-react',
// };

module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '^.+\\.svg$': '<rootDir>/__test__/__mocks__/svgrMock.js', // NB: è stato fatto un mock delle svg come componeti
    'src/(.*)': '<rootDir>/src/$1',
    '@forms/(.*)': '<rootDir>/src/services/forms/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@svg': '<rootDir>/src/assets/svg',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  // preset: '@babel/preset-react',
};
