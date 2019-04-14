import chai from 'chai';
import {Person} from './Person';
import faker from 'faker';

const {assert, expect} = chai;
chai.should();

describe('Person', () => {
  let person;
  const name = faker.name.firstName;

  beforeEach(() => {
    person = new Person(name);
  });

  it('should create instanse with field name', () => {
    person.name.should.equal(name);
  });

  it('should create instanse with field date', () => {
    person.creation.should.not.be.equal(undefined);
  });

  it('field date should be instance of Date', () => {
    person.creation.should.be.instanceof(Date);
  });

  it('setName(name) should set name', () => {
    const newName = faker.name.firstName;

    person.setName(newName);
    person.name.should.equal(newName);
  });

  it('getName() should return name', () => {
    person.getName().should.equal(person.name);
  });

  it('getCreation should return day time', () => {
    let dayObj = {
      3: 'night child',
      23: 'night child',
      7: 'morning child',
      12: 'day child',
      20: 'evening child'
    };

    for (let key in dayObj) {
      person.creation.setHours(key);

      expect(person.getCreation()).equal(dayObj[key]);
    };
  })
});