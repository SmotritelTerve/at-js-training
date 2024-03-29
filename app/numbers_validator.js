/**
 * A simple class containing methods for validating numbers
 *
 * @class NumbersValidator
 */
export class NumbersValidator {
  /**
     * Creates an instance of NumbersValidator.
     * @memberof NumbersValidator
     */
  constructor() {
  };
  /**
     *
     *
     * @param {Number} number number to check
     * @return {Boolean} true if element is even
     * @memberof NumbersValidator
     */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
    } else {
      return number % 2 === 0;
    }
  };

  /**
 *
 * @param {Array<Number>} arrayOfNumbers array of numbers to go through
 * @return {Array<Number>} array of even numbers
 * @memberof NumbersValidator
 */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
      arrayOfNumbers.every((item) => typeof item == 'number')) {
      const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfEvenNumbers;
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  };

  /**
 *
 * @param {Array<Number>} arrayOfNumbers array of numbers to go through
 * @return {Boolean} true if all are numbers
 * @memberof NumbersValidator
 */

  // eslint-disable-next-line require-jsdoc
  isAllNumbers(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error(`[${arrayOfNumbers}] is not an array`);
    }
    return arrayOfNumbers.every((n) => typeof n === 'number');
  }
};

