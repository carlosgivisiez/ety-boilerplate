module.exports = {
    testEnvironment: "node",
    transform: {
        "\\.ts$": "ts-jest"
    },
    moduleFileExtensions: ["ts", "js"],
    moduleNameMapper: {
        "^@src/(.*)$": "<rootDir>/src/$1"
    }
};
