const selectors = require.context('.', true, /select.*js/);

module.exports = {};

selectors.keys().forEach(key => {
  if (selectors(key).default) {
    module.exports[key.slice(2, -3)] = selectors(key).default;
  } else {
    Object.assign(module.exports, selectors(key));
  }
});
