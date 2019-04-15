import chai from 'chai';
import sinon from 'sinon';
import faker from 'faker';
import { days, defaultProduct, money, users } from './constants';
import {showMessage, getDay, getAdultUsers, getRandomUsers, Product} from './main';

const {assert, expect} = chai;
chai.should();

describe('showMessage()', () => {
  const fakeText = 'faker.address.city';

  afterEach(() => {
    window.alert.restore();
  });

  it('alert should be invoked', () => {
    const spy = sinon.spy(window, 'alert');
    showMessage()

    expect(spy.called).true;
  });

  it('alert should be invoked with argument', () => {
    const spy = sinon.spy(window, 'alert');
    showMessage(fakeText);

    expect(spy.calledWith(fakeText)).true;
  });
});

describe('getDay()', () => {
  it('result of getDay() should be part of "days" array', () => {
    days.indexOf(getDay()).should.be.not.equal(-1);
  });
});

describe('getAdultUsers()', () => {
  it('result of getAdultUsers() should be instance of Array', () => {
    getAdultUsers().should.be.an.instanceOf(Array);
  });

  it('should return users with age > 18', () => {
    const usersTest = [{age: 15},  {age: 28}];

    usersTest.forEach((val, ind) => {
      assert.includeDeepMembers(getAdultUsers(usersTest), [usersTest[1]]);
    });
  });

  it('should be invoked with argument "users"', () => {
    window.getAdultUsers = getAdultUsers;
    const getAdultUsers = sinon.stub(window, 'getAdultUsers');
    getAdultUsers(users);

    expect(getAdultUsers.calledWith(users)).true;
    getAdultUsers.restore();
  });
});

describe('getRandomUsers()', () => {
  const random = sinon.stub(Math, 'random');
  const round = sinon.stub(Math, 'round');
  const usersTest = [1,2,3,4,5,6];
  random.returns(0.7); 
  round.returns(3);

  
  it('should return false if users not set', () => {
    getRandomUsers().should.equal(false);
  });

  it('should return sliced array if numb > 0.5', () => {
    assert.includeDeepMembers(getRandomUsers(usersTest), usersTest.slice(0, round));
  });

  random.returns(0.3);
  
  it('should return sliced array if numb <= 0.5', () => {
    assert.includeDeepMembers(getRandomUsers(usersTest), usersTest.slice(round(), usersTest.length));
  });

  Math.random.restore();
  Math.round.restore();
});

describe('Product', () => {
  let product;
  let titleTest;
  let priceTest;

  beforeEach(() => {
    product = new Product(titleTest, priceTest);
  });

  it('set constructor with default title', () => {
    assert.equal(product.title, defaultProduct);
  });

  it('set constructor with default price', () => {
    assert.equal(product.price, 10);
  });

  it('set constructor with entered title', () => {
    titleTest = faker.lorem.word;
    assert.equal(product.title, defaultProduct);
  });

  it('set constructor with entered price', () => {
    priceTest = faker.random.number;
    assert.equal(product.price, 10);
  });

  it('getPrice() returns price with currency', () => {
    product.getPrice().should.equal(product.price + money);
  });

  it('throws an error if no value in setPrice()', () => {
    expect(product.setPrice).to.throw('Price should be defined');
  });

  it('setPrice(value) sets price to  value, if value > 10', () => {
    product.setPrice(15);
    expect(product.price).equal(15);
  });
});

