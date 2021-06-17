module.exports = config => {
  config.set({
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    jest: {
      project: "custom",
      config: require("./jest.config.js"),
      enableFindRelatedTests: true,
    },
    transpilers: ["typescript"],
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"]
  });
};
