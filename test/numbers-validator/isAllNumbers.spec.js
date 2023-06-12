/* eslint-disable max-len */
import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

const allNumbersArray = [4, 3, 6];
// const notAllNumbersArray = ['ai', 1];
const notArrayTestValue = 1;

describe('isAllNumbers tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  // clean up after the test
  afterEach(() => {
    validator = null;
  });

  it('should return true if every item of the array provided is a number', () => {
    const validationResults = validator.isAllNumbers(allNumbersArray);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error when provided value is not an array', () => {
    const valueToVerify = notArrayTestValue;
    expect(() => {
      validator.isAllNumbers(valueToVerify);
    }).to.throw(`[${valueToVerify}] is not an array`);
  });
});
