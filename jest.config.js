module.exports = {
  preset: "ts-jest",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "reports/",
};
