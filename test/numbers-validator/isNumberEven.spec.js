import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isNumberEven positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  // clean up after the test
  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', ()=> {
    const validatingResults = validator.isNumberEven(4);
    expect(validatingResults).to.be.equal(true);
  });

  it('should return false when provided with an even number', ()=> {
    const validatingResults = validator.isNumberEven(5);
    expect(validatingResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number it is of type "string"');
  });
});
