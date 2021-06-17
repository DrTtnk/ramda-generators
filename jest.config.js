const ESLintProject = {
    displayName: "ESLint",
    runner     : "jest-runner-eslint", // Documentation:  https://github.com/jest-community/jest-runner-eslint
    testMatch  : ["<rootDir>/(src|__test__)/**/*"],
    preset     : "ts-jest",
};

const TestProject = {
    displayName      : "Test",
    errorOnDeprecated: true,
    reporters        : ["default"],
    preset           : "ts-jest",
};

const baseTestingConfig = {
    watchPlugins: ["jest-runner-eslint/watch-fix"],

    collectCoverage    : true,
    collectCoverageFrom: ["src/**/*.ts"],
    coverageThreshold  : { global: { statements: 95 } },
    coverageReporters  : ["html", "text"],

    testEnvironment: "node",
    transform      : { "^.+\\.tsx?$": "ts-jest" },
    roots          : [
        "<rootDir>/src",
        "<rootDir>/__test__",
    ],
    globals: { "ts-jest": { diagnostics: false } },

    projects: [ESLintProject, TestProject],
};

const mutationsTestingConfig = {
    ...TestProject,
    testEnvironment: "node",
    transform      : { "^.+\\.tsx?$": "ts-jest" },
    roots          : [
        "<rootDir>/build/src",
        "<rootDir>/build/__test__",
    ],
};

module.exports = process.env.MUTATION_TEST ? mutationsTestingConfig : baseTestingConfig;
