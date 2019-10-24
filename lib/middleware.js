const get = require('lodash.get');
const render = require('./template');
const { isIE, sanitizeObject } = require('./utils');

const generateMiddleware = (options) => (req, res, next) => {
  if (!isIE(req.headers['user-agent'])) return next();
  if (req.cookies[options.cookie]) return next();

  const raw = options.dictKey ? get(res.locals, options.dictKey) : options.dict;
  const dict = options.sanitize ? sanitizeObject(raw) : raw;

  res.send(render(options, dict));
};

module.exports = generateMiddleware;
