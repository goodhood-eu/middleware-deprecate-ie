const path = require('path');
const zlib = require('zlib');
const fs = require('fs');

const babel = require('@babel/core');
const terser = require('terser');

const SOURCE = path.resolve(`${__dirname}/client/script.js`);
const OUTPUT = path.resolve(`${__dirname}/dist`);

const BABEL_OPTIONS = {
  presets: ['@babel/preset-env'],
};

const TERSER_OPTIONS = {
  mangle: true,
  compress: { drop_console: true },
  output: { max_line_len: 64000 },
};

const ZLIB_OPTIONS = {
  level: 9,
};

const BROTLI_OPTIONS = {
  params: {
    [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
  },
};


if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT);


const { code: raw } = babel.transformFileSync(SOURCE, BABEL_OPTIONS);
const { error, code } = terser.minify(raw, TERSER_OPTIONS);

if (error) throw error;

const gzip = zlib.gzipSync(code, ZLIB_OPTIONS);
const br = zlib.brotliCompressSync(code, BROTLI_OPTIONS);

new Map([
  ['script.js', code],
  ['script.js.gz', gzip],
  ['script.js.br', br],
]).forEach((buffer, fileName) => {
  fs.writeFileSync(path.resolve(`${OUTPUT}/${fileName}`), buffer);
});
