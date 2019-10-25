const { expect } = require('chai');

const render = require('../../lib/template');

describe('lib/template.js', () => {
  it('renders an html string', () => {
    expect(render({}, {})).to.be.a('string');
    expect(render({}, {})).to.include('<html');
  });

  it('avoids button/script when not skippable', () => {
    expect(render({}, {})).to.not.include('<script');
    expect(render({}, {})).to.not.include('class="button"');
  });

  it('skippable when needed', () => {
    expect(render({ skippable: true }, {})).to.include('<script');
    expect(render({ skippable: true }, {})).to.include('class="button"');
  });
});
