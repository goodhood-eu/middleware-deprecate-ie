const { expect } = require('chai');

const utils = require('../../lib/utils');

const uaIE11 = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko';
const uaIE106 = 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0';
const uaIE10 = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)';
const uaIE9 = 'Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)';
const uaIE8 = 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; SLCC1; .NET CLR 1.1.4322)';
const uaChrome = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36';
const uaEdge = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931';

const ok = [
  uaIE11,
  uaIE106,
  uaIE10,
  uaIE9,
  uaIE8,
];

const notOk = [
  uaChrome,
  uaEdge,
];

describe('lib/utils.js', () => {
  it('detects IE', () => {
    ok.forEach((ua) => {
      expect(utils.isIE(ua)).to.be.true;
    });

    notOk.forEach((ua) => {
      expect(utils.isIE(ua)).to.be.false;
    });
  });

  it('sanitizes objects', () => {
    const obj = {
      prop: '<script>alert(1)</script>',
    };

    const expected = '&lt;script&gt;alert(1)&lt;/script&gt;';

    expect(utils.sanitizeObject(obj).prop).to.be.equal(expected);
  });
});
