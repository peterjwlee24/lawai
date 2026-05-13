/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: ["<rootDir>/tests/unit/**/*.test.{ts,tsx}"],
  setupFilesAfterEach: [],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: { jsx: "react-jsx" } }],
  },
};
