module.exports = {
  preset: "ts-jest",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports/",
        outputFile: "junit.xml",
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "reports/",
};
