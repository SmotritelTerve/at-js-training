import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

const testString = '4';

describe('isNumberEven tests', () => {
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

  it('should return false when provided with an odd number', ()=> {
    const validatingResults = validator.isNumberEven(5);
    expect(validatingResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    const valueToVerify = testString;
    expect(() => {
      validator.isNumberEven(valueToVerify);
    // eslint-disable-next-line max-len
    }).to.throw(`[${valueToVerify}] is not of type "Number" it is of type "${typeof valueToVerify}"`);
  });
});
