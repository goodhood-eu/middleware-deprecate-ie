const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');


describe('lib/middleware.js', () => {
  let middleware;

  let render;
  let isIE;
  let sanitizeObject;

  let req;
  let res;
  let next;

  beforeEach(() => {
    render = sinon.spy();
    isIE = sinon.spy();
    sanitizeObject = sinon.spy();

    middleware = proxyquire('../../lib/middleware', {
      './template': render,
      './utils': { isIE, sanitizeObject },
    });

    req = {
      headers: {},
      cookies: {},
    };
    res = {
      locals: {
        locale: {
          lolcat: '(^ . ^)',
        },
      },
      send: sinon.spy(),
    };
    next = sinon.spy();
  });

  it('not IE skipped', () => {
    middleware({})(req, res, next);

    expect(isIE.calledOnce).to.be.true;
    expect(next.calledOnce).to.be.true;
    expect(render.notCalled).to.be.true;
    expect(res.send.notCalled).to.be.true;
  });

  it('IE with cookie skipped', () => {
    isIE = sinon.stub().returns(true);
    req.cookies.skip = 'true';
    middleware({ cookie: 'skip' })(req, res, next);

    expect(isIE.calledOnce).to.be.true;
    expect(next.calledOnce).to.be.true;
    expect(render.notCalled).to.be.true;
    expect(res.send.notCalled).to.be.true;
  });

  it('IE with no cookie renders landing', () => {
    isIE = sinon.stub().returns(true);
    middleware({})(req, res, next);

    expect(isIE.calledOnce).to.be.true;
    expect(next.notCalled).to.be.true;
    expect(render.calledOnce).to.be.true;
    expect(res.send.calledOnce).to.be.true;
  });
});
