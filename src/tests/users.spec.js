import chai from 'chai';
import sinon from 'sinon';
import faker from 'faker';
import { getUsers } from './users';
import { resolve } from 'path';

const {assert, expect} = chai;
chai.should();


// describe('fetch()', () => {
//   const fakeFetch = (data = 'test') => {
//     return new Promise((resolve) => resolve( 
//         { json: () =>  new Promise((resolve) => resolve('data')) }
//     ))
//   }
//   let stub;

//   beforeEach(() => {
//   stub = sinon.stub(window, 'fetch');
//   });
//   afterEach(() => {
//     window.fetch.restore();
//   });
 
//   it('should call fetch() method', () => {
//     stub.returns(fakeFetch());
//     getUsers();
//     expect(stub.called).to.be.true;
//    });
  
//   it('should call console.log() on success response', (done) => {
//     const consoleStub = sinon.stub(console, 'log');
    
//     stub.returns(fakeFetch());
//     getUsers().then(data => data.json()).then((data) => {  
//       expect(consoleStub.called).to.be.true;
//       done(); 
//       consoleStub.restore();  
//     });
//   });

//    it('should call console.log() with args on success response', (done) => {
//     const consoleStub = sinon.stub(console, 'log');
//     const testString = 'test';
//     stub.returns(fakeFetch(testString));
//     getUsers().then(() => {
//       expect(consoleStub.getCall(0).args[0]).to.equal(testString);
//       done();
//       consoleStub.restore();
//     });
//    });
   

//    it('should call console.error() on reject', (done) => {
//     const consoleStub = sinon.stub(console, 'error');
//     stub.rejects(); // ← stub вернет промис в состоянии rejected
//     getUsers().then(() => {
//       expect(consoleStub.called).to.be.true;
//       done();
//       consoleStub.restore();
//     });
//    });  
//});