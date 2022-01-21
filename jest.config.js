module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/src/components$1',
  },
  coverageThreshold: {
    global: {
      branches: 81.66,
      functions: 100,
      lines: 89.87,
      statements: 89.87,
    },
  },
};
