/**
 * Ovveride function getLocalIdent of css-loader rule, to use directly in your webpack function of next.config
 * Compatible with latest versione of NextJs and Webpack5
 *
 * @author Stefano Gagliardi
 */

const { rule } = require("postcss");

/**
 * Ovveride function getLocalIdent of css-loader rule
 *
 * @param {WebpackConfig} config
 * @returns {WebpackConfig} config
 */
module.exports = (prefix = '', config = {}) => {
  // Check for rule and retrive css-loader index
  let ruleIndex = null;
  if (
    config?.module &&
    config?.module?.rules &&
    Array.isArray(config?.module?.rules) &&
    config?.module?.rules.length > 0
  ) {
    // console.log('config?.module?.rules: ', config?.module?.rules);
    ruleIndex = getRulesIndex(config?.module?.rules);
  }

  return config;
};

// Search for rules index of "css-loader" 
function getRulesIndex(rules) {
  let index = null;
  for(let i=0;i<rules.length;i++) {
    const rule = rules[i];
    console.log("rule: ", i, "   ",  rule)
  }
}