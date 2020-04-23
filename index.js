const render = require('./template');

const DEFAULTS = {
  assetsPath: '/deprecate-ie',
  lang: {
    headline: 'Internet Explorer is not supported',
    text: 'The browser you are currently using was released in 2013 or earlier. We can no longer support this browser and the website will look broken or not function. It is recommended to upgrade to any modern browser. You will find examples below.',
    link: 'I don\'t care',
  },
};

const getConfig = (options = {}) => ({
  ...DEFAULTS,
  ...options,
  lang: {
    ...DEFAULTS.lang,
    ...options.lang,
  },
});

module.exports = (options) => render(getConfig(options));
