module.exports = {
  preset: "ts-jest",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: "node",
};
