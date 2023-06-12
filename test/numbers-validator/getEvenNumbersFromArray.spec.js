import {expect} from 'chai';
import {NumbersValidator} from '../../app/numbers_validator.js';

const arrayOfNumbers = [5, 2, 6, 11, 22];
const arrayOfValues = [5, '2', 6, 11, 22];

describe('getEvenNumbersFromArray tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([2, 6, 22]);
  });

  it('should throw an error if array is not full of numbers', () => {
    const testArray = arrayOfValues;
    // const testArray = arrayOfNumbers;
    expect(() => {
      validator.getEvenNumbersFromArray(testArray);
    }).to.throw(`[${arrayOfNumbers}] is not an array of "Numbers"`);
  });
});
