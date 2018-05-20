import { assert } from 'chai';
//import quickSort from '../lib/quickSort.js';
import generateArray from './utilities';
const quickSort = require('../lib/quickSort.js');

describe('quickSort', function () {

  it('should sort an array', function () {

    let array = generateArray(10);
    let newArray = [...array];

    let expected = array.sort((a, b) => {
      return a - b;
    });

    let actual = quickSort(newArray);

    console.log(actual, expected);

    assert.deepEqual(actual, expected);
  });
});
