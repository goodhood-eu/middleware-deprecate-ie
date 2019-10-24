const escapeHTML = require('escape-html');

const isIE = (userAgent) => (userAgent.includes('MSIE ') || userAgent.includes('Trident/'));

const sanitizeObject = (object) => Object.keys(object).reduce((acc, key) => ({
  ...acc,
  [key]: escapeHTML(object[key]),
}), {});

module.exports = { isIE, sanitizeObject };
