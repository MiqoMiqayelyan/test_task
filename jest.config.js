/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};

module.exports = config;
