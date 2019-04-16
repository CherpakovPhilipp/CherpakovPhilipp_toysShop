import chai from 'chai';
import sinon from 'sinon';
import faker from 'faker';
import { days, defaultProduct, money, users } from './constants';
import { showMessage, getDay, getAdultUsers, getRandomUsers, Product } from './main';

const { assert, expect } = chai;
chai.should();

describe('showMessage()', () => {
  const fakeText = 'faker.address.city';

  afterEach(() => {
    window.alert.restore();
  });

  it('alert should be invoked', () => {
    const stub = sinon.stub(window, 'alert');
    showMessage()

    expect(stub.called).true;
  });

  it('alert should be invoked with argument', () => {
    const stub = sinon.stub(window, 'alert');
    showMessage(fakeText);

    expect(stub.calledWith(fakeText)).true;
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
  let random, round;
  const usersTest = [1,2,3,4,5,6];
  
  beforeEach(() => {
    random = sinon.stub(Math, 'random');
    round = sinon.stub(Math, 'round');
    random.returns(0.7); 
    round.returns(3);
  });

  afterEach(() => {
    Math.random.restore();
    Math.round.restore();
  });

  it('should return false if users not set', () => {
    getRandomUsers().should.equal(false);
  });

  it('should return sliced array if numb > 0.5', () => {
    assert.includeDeepMembers(getRandomUsers(usersTest), usersTest.slice(0, round));
  });
  
  it('should return sliced array if numb <= 0.5', () => {
    random.returns(0.3);
    assert.includeDeepMembers(getRandomUsers(usersTest), usersTest.slice(round(), usersTest.length));
  });
});

describe('Product', () => {
  let product;
  let titleTest = faker.lorem.word;;
  let priceTest = faker.random.number;;

  beforeEach(() => {
    product = new Product();
  });

  it('set constructor with default title', () => {
    assert.equal(product.title, defaultProduct);
  });

  it('set constructor with default price', () => {
    assert.equal(product.price, 10);
  });

  it('set constructor with entered title', () => {
    assert.equal(product.title, defaultProduct);
  });

  it('set constructor with entered price', () => {
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

  it('setPrice(value): price shouldn\'t change if value less than 10', () => {
    product.setPrice(5);
    expect(product.price).not.equal(5);
  });
});

