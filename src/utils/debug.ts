function setDebug(isDebug) {
  if (isDebug) {
    // See index.d.ts in root for debug property definition
    window.debug = {
      log: window.console.log.bind(window.console, 'log: %s'),
      error: window.console.error.bind(window.console, 'error: %s'),
      info: window.console.info.bind(window.console, 'info: %s'),
      warn: window.console.warn.bind(window.console, 'warn: %s'),
    };
  } else {
    var __no_op = function () {};

    window.debug = {
      log: __no_op,
      error: __no_op,
      warn: __no_op,
      info: __no_op,
    };
  }
}

export default setDebug;
