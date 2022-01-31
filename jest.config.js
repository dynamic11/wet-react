module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/src/components$1',
  },
  coverageThreshold: {
    global: {
      branches: 99.25,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
