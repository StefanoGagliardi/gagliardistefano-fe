const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: '.' });

const customJestConfig = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // allow SWC to run on typescript code of generated types (to use schema model types)
  //   or cached types (to use enum's code), while still keeping mode_modules disabled
  transformIgnorePatterns: [
    'node_modules/(?!@types/graphql-let|.cache/graphql-let)',
  ],
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
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.tsx',
    // types (graphql, custom)
    '!**/*.d.ts',
    // example components, not used in production
    '!**/examples/**',
  ],
  // preset: '@babel/preset-react',
};

const asyncConfig = createJestConfig(customJestConfig);

module.exports = async () => {
  const config = await asyncConfig();

  // next/jest ignores node_modules and allows to add more ignore patterns, but we need to override them fully to whitelist some node_modules
  // https://github.com/vercel/next.js/blob/canary/packages/next/build/jest/jest.ts
  config.transformIgnorePatterns = customJestConfig.transformIgnorePatterns;

  return config;
};
