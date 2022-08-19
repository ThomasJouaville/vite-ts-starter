module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest/svgTransform.js',
    '^.+\\.css$': '<rootDir>/jest/cssTransform.js',
  },
  moduleDirectories: ['node_modules', 'src'],
}
