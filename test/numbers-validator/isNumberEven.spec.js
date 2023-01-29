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
});
