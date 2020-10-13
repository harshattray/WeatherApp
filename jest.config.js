/**
 * @Author: harsha
 * @Date:   2020-10-13T16:02:06+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T16:16:45+02:00
 */

module.exports = {
  setupFilesAfterEnv: ["./src/setupTests.js"],
  bail: true,
  verbose: true,
  transform: {
    "^.+\\.js?$": "babel-jest"
  },
  testMatch: ["**/src/**/*.test.js"],
  moduleFileExtensions: ["js"],
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  moduleNameMapper: {
    "^@app(.*)$": "<rootDir>/src$1",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "jest-transform-stub"
  }
};
