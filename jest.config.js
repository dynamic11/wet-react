module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/src/components$1',
  },
  coverageThreshold: {
    global: {
      branches: 83.07,
      functions: 100,
      lines: 90.36,
      statements: 90.36,
    },
  },
};
