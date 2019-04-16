import chai from 'chai';
import { days, defaultProduct, money, users } from './constants';

const { assert, expect } = chai;
chai.should();

describe('days', () => {
  it('days should be instance of Array', () => {
    days.should.be.an.instanceOf(Array);
  });

  it('days length should be 7', () => {
    days.length.should.be.equal(7);
  });

  it('first day should be Sunday', () => {
    expect(days[0]).equal('Sunday');
  });
});

describe('defaultProduct', () => {
  it('should be an Apple', () => {
    assert.equal(defaultProduct, 'Apple');
  });

  it('should be a string', () => {
    expect(defaultProduct).to.be.a('string');
  });
});

describe('money', () => {
  it('should be a string', () => {
    expect(money).to.be.a('string');
  });

  it('should match $', () => {
    expect(money).to.match(/$/);
  });
});

describe('users', () => {
  it('users should be instance of Array', () => {
    users.should.be.an.instanceOf(Array);
  });

  it('users elements should have key "age"', () => {
    users.forEach(val => {expect(val.age).to.not.be.undefined});
  });
});