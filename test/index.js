const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');


describe('index.js', () => {
  let middleware;
  let spy;

  beforeEach(() => {
    spy = sinon.spy();
    middleware = proxyquire('../index', {
      './lib/middleware': spy,
    });
  });

  it('empty call', () => {
    middleware();
    expect(spy.calledOnce).to.be.true;
    const call = spy.getCall(0);
    const result = call.args[0];

    expect(result).to.be.a('object');
    expect(result.dict).to.be.a('object');
    expect(result.dict.lang).to.be.a('string', 'us-US');
  });

  it('merge settings', () => {
    const settings = {
      cookie: 'cookiemonster69',
    };
    middleware();
    expect(spy.calledOnce).to.be.true;
    const call = spy.getCall(0);
    const result = call.args[0];

    expect(result).to.be.a('object');
    expect(result.cookie).to.be.a('string', settings.cookie);
  });

  it('merge dicts', () => {
    const settings = {
      dict: {
        title: 'Awesome',
      },
    };
    middleware();
    expect(spy.calledOnce).to.be.true;
    const call = spy.getCall(0);
    const result = call.args[0];

    expect(result).to.be.a('object');
    expect(result.dict).to.be.a('object');
    expect(result.dict.lang).to.be.a('string', 'us-US');
    expect(result.dict.title).to.be.a('string', settings.dict.title);
  });
});
