const assert = require('assert');
const match = require('../match');

describe('Matching ( and ) parenthesis using matchParenFunctional', () => {
  it('( should be false', () => {
    assert.equal(match.matchParenFunctional('('), false);
  });

  it('() should be true', () => {
    assert.equal(match.matchParenFunctional('()'), true);
  });

  it('(((({{{}}})) should be false', () => {
    assert.equal(match.matchParenFunctional('(((({{{}}}))'), false);
  });

  it('()()()} should be true', () => {
    assert.equal(match.matchParenFunctional('()()()}'), true);
  });
  it('(hello{[[])()()} should be true', () => {
    assert.equal(match.matchParenFunctional('(hello{[[])()()}'), true);
  });
  it(')(hello{[[])()()} should be false', () => {
    assert.equal(match.matchParenFunctional(')(hello{[[])()()}'), false);
  });
});

describe('Matching ( and ) parenthesis using matchParenBreak', () => {
  it('( should be false', () => {
    assert.equal(match.matchParenBreak('('), false);
  });

  it('() should be true', () => {
    assert.equal(match.matchParenBreak('()'), true);
  });

  it('(((({{{}}})) should be false', () => {
    assert.equal(match.matchParenBreak('(((({{{}}}))'), false);
  });

  it('()()()} should be true', () => {
    assert.equal(match.matchParenBreak('()()()}'), true);
  });
  it('(hello{[[])()()} should be true', () => {
    assert.equal(match.matchParenBreak('(hello{[[])()()}'), true);
  });
  it(')(hello{[[])()()} should be false', () => {
    assert.equal(match.matchParenBreak(')(hello{[[])()()}'), false);
  });
});

describe('Matching open and closing using matches', () => {
  it('< should be false', () => {
    assert.equal(match.matches('<'), false);
  });
  it('<> should be true', () => {
    assert.equal(match.matches('<>'), true);
  });
  it('( should be false', () => {
    assert.equal(match.matches('('), false);
  });
  it('{ should be false', () => {
    assert.equal(match.matches('{'), false);
  });
  it('[ should be false', () => {
    assert.equal(match.matches('['), false);
  });

  it('() should be true', () => {
    assert.equal(match.matches('()'), true);
  });
  it('{} should be true', () => {
    assert.equal(match.matches('{}'), true);
  });
  it('[] should be true', () => {
    assert.equal(match.matches('[]'), true);
  });

  it('(((({{{}}})) should be false', () => {
    assert.equal(match.matches('(((({{{}}}))'), false);
  });

  it('(((({{{}}})))) should be true', () => {
    assert.equal(match.matches('(((({{{}}}))))'), true);
  });

  it('()()()} should be false', () => {
    assert.equal(match.matches('()()()} '), false);
  });

  it('()()(){} should be true', () => {
    assert.equal(match.matches('()()(){}'), true);
  });

  it('(hello{[[])()()} should be false', () => {
    assert.equal(match.matches('(hello{[[])()()}'), false);
  });

  it('(hello{[[]]})()(){{}} should be true', () => {
    assert.equal(match.matches('(hello{[[]]})()(){{}}'), true);
  });

  it(')(hello{[[])()()} should be false', () => {
    assert.equal(match.matches(')(hello{[[])()()}'), false);
  });
});
