'use strict';

const each = require('lodash/each');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const environmentConfigs = ['demo', 'dist'];

// Set the correct environment
let env;
if (args.env) {
    env = args.env;
} else {
    env = 'demo';
}
process.env.REACT_WEBPACK_ENV = env;

// Get available configurations
const configs = { };

each(environmentConfigs, (env) => {
    configs[env] = require(path.join(__dirname, 'cfg/' + env))
});

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
const buildConfig = (wantedEnv) => {
    const isValid = wantedEnv && wantedEnv.length > 0 && ~~environmentConfigs.indexOf(wantedEnv);
    const validEnv = isValid ? wantedEnv : 'demo';

    return configs[validEnv];
};

module.exports = buildConfig(env);
