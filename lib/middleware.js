const get = require('lodash.get');
const render = require('./template');

const generateMiddleware = (options) => (req, res, next) => {
  const lang = options.dictKey ? get(res.locals, options.dictKey) : options.dict;
  const getScript = () => render(options, lang);
  res.locals.getIE11DeprecationScript = getScript;
  next();
};

module.exports = generateMiddleware;
