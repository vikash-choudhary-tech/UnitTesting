module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/serviceWorker.js",
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  // Other Jest configurations
};
