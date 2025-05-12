const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  maxWorkers: 1,
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura', 'lcov'],
};
