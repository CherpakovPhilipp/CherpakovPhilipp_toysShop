import chai from 'chai';
import sinon from 'sinon';
import faker from 'faker';
import {getUsers} from './users';
import { resolve } from 'path';

// const {assert, expect} = chai;
// chai.should();

// describe('getUsers()', () => {
//   let stub;
//   let fakeConsole;
//   const testString = faker.lorem.word();

//   const createStub = () => {
    
//   };

//   beforeEach(() => {
//     stub = sinon.stub(window, 'fetch');
//     stub.returns(Promise.resolve(
//       {json: () => Promise.resolve(testString)}
//     ));

//     fakeConsole = sinon.stub(console, 'log');
//   });

//   afterEach(() => {
//     window.fetch.restore();
//     console.log.restore();
//   });

//   it('should call fetch()', () => {
//     getUsers();

//     expect(stub.called).to.be.true;
//   });

//   it('should call console.log with result success', () => {
//     getUsers();

//     expect(fakeConsole.called).to.be.true;
//   });
// });