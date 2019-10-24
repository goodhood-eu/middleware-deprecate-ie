const generateMiddleware = require('./lib/middleware');

const DEFAULTS = {
  skippable: true,
  expires: 60 * 60 * 24, // one day
  cookie: 'ie-deprecation-middleware-pass-through',
  sanitize: true,
  dictKey: null,
  dict: {
    lang: 'en-US',
    title: 'Deprecation warning',
    description: 'The browser you are using is deprecated',
    headline: 'Internet Explorer is not supported',
    text: 'The browser you are currently using was released in 2013 or earlier. We can no longer support this browser and the website will look broken or not function. It is recommended to upgrade to any modern browser. You will find examples below.',
    link: 'I don\'t care',
  },
};

const getMiddleware = (settings = {}) => generateMiddleware({
  ...DEFAULTS,
  ...settings,
  dict: {
    ...DEFAULTS.dict,
    ...settings.dict,
  },
});

module.exports = getMiddleware;
