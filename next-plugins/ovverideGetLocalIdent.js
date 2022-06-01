const path = require("path");
const generateName = require("css-class-generator")
/**
 * Ovveride webpack config (LocalIdentName)
 * Ovveride just css module
 */

let prefixClass = '';
module.exports = (config, prefix = '') => {
  let indexRule = null;
  if (
    config?.module &&
    config?.module?.rules &&
    Array.isArray(config?.module?.rules) &&
    config?.module?.rules.length > 0
  ) {
    indexRule = getIndexFromRule(config?.module?.rules);
  }

  // Not found, return config for prevnt error
  if (indexRule === null) {
    console.warn(
      "Attention! ClassName minification - CSS-loader rule index NOT FOUND - Can't MINIFY className"
    );
    return config;
  }

  if (prefix) {
    prefixClass = prefix;
  }

  // Retrive rules by given index
  const oneOf = config?.module?.rules[indexRule].oneOf;

  // Check for module.(css|scss)
  for (let j = 0; j < oneOf.length; j++) {
    const item = oneOf[j];
    if (typeof item.sideEffects !== 'undefined' && item.sideEffects === false) {
      if (item?.use && Array.isArray(item?.use)) {
        for (let i = 0; i < item.use.length; i++) {
          const { loader, options } = item.use[i];
          if (
            options?.modules &&
            typeof options?.modules?.getLocalIdent === 'function'
          ) {
            // config?.module?.rules[indexRule].oneOf[j].use[i].options.modules.getLocalIdent = customGetLocalIdent;
            options?.modules?.getLocalIdent = customGetLocalIdent;
          }
        }
      }
    }
  }

  return config;
};

const customGetLocalIdent = (
  loaderContext,
  localIdentName,
  localName,
  options
) => {
  if(!options?.context) {
    options.context = loaderContext.rootContext;
  }

  const request = path.relative(options.context, loaderContext.resourcePath).replace(/\\/g, '/');
  const className = getIncrementalClassName(localName, request);
  return className;
};

/**
 * Generate classname
 */
let classIndex = 0;
let classKey = {};
const getIncrementalClassName = (className, path) => {

  const strings = path.split("/");
  const fileName = Array.isArray(strings) ? strings[strings.length-1].toLowerCase() : path;
  const parentFolder = Array.isArray(strings) ? strings[strings.length-2].toLowerCase()[0] : "";
  const keyName = parentFolder + fileName.split(".")[0];
  classIndex++;

  let retKey = classIndex;
  if(classKey[keyName]) {
    if(classKey[keyName][className]) {
      retKey = classKey[keyName][className].index;
    } else {
      classKey[keyName][className] = {index: classIndex};
    }
  } else {
    classKey[keyName] = {};
    classKey[keyName][className] = {index: classIndex};
  }

  let newClass = generateName(retKey);
  if(prefixClass) {
    newClass = prefixClass + newClass;
  }
  return newClass;

}

/**s
 * Retrive index of css-loader rules
 * @param {Array} rules
 */
function getIndexFromRule(rules) {
  let index = null;
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const keySize = Object.keys(rule).length;
    if (
      index === null &&
      keySize === 1 &&
      typeof rule?.oneOf !== 'undefined' &&
      Array.isArray(rule?.oneOf)
    ) {
      index = i;
    }
  }
  return index;
}
