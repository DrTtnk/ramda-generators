// Documentation:  https://github.com/jest-community/jest-runner-eslint
// eslint-disable-next-line fp/no-mutation
module.exports = {
    cliOptions: {
        cache      : true,
        config     : ".eslintrc.js",
        fix        : true,
        maxWarnings: 15,
        quiet      : true,
    },
};
