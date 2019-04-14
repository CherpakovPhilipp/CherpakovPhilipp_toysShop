import chai from 'chai';
import {sum, foo} from './tools';

//const assert = require('assert');

const {assert, expect} = chai;
chai.should();

describe('sum()', () => {
  it('sum(2, 3) should return 5', () => {
    assert.equal(sum(2, 3), 5);
  });

  it('sum(2, 3) should return 5', () => {
    sum(2, 3).should.not.instanceOf(Object);
  });

  it('should return Number', () => {
    assert.typeOf(sum(5,5), 'Number');
  });


});

describe ('foo()', () => {
  it ('should return "undefined"', () => {
    assert.equal(foo(5, 10), undefined);
  });
})