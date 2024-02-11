/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let temp;
  if (a >= b) {
    temp = a;
  } else {
    temp = b;
  }
  if (temp >= c) {
    return temp;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let qX = queen.x;
  let qY = queen.y;
  const kX = king.x;
  const kY = king.y;

  if (qX === kX && qY === kY) {
    return true;
  }

  while (qX >= 1) {
    if (qX === kX && qY === kY) {
      return true;
    }
    qX -= 1;
  }
  qX = queen.x;

  while (qX <= 8) {
    if (qX === kX && qY === kY) {
      return true;
    }
    qX += 1;
  }
  qX = queen.x;

  while (qY <= 8) {
    if (qX === kX && qY === kY) {
      return true;
    }
    qY += 1;
  }
  qY = queen.y;

  while (qY >= 1) {
    if (qX === kX && qY === kY) {
      return true;
    }
    qY -= 1;
  }
  qY = queen.y;

  while (qY <= 8 && qX >= 1) {
    if (qX === kX && qY === kY) {
      return true;
    }
    qY += 1;
    qX -= 1;
  }
  qY = queen.y;
  qX = queen.x;

  while (qY <= 8 && qX <= 8) {
    if (qX === kX && qY === kY) {
      return true;
    }
    qY += 1;
    qX += 1;
  }
  qY = queen.y;
  qX = queen.x;

  while (qY >= 1 && qX <= 8) {
    if (qX === kX && qY === kY) {
      return true;
    }
    qY -= 1;
    qX += 1;
  }
  qY = queen.y;
  qX = queen.x;

  while (qY >= 1 && qX >= 1) {
    if (qX === kX && qY === kY) {
      return true;
    }
    qY -= 1;
    qX -= 1;
  }
  qY = queen.y;
  qX = queen.x;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;
  const arr = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  const numArr = [];
  let i = 0;
  let roman = '';
  while (number >= 1) {
    numArr[i] = number % 10;
    number = Math.floor(number / 10);
    i += 1;
  }

  if (num >= 10) {
    for (let j = 1; j <= numArr[1]; j += 1) {
      roman += arr[9];
    }
  }
  if (num >= 10 && num % 10 !== 0) {
    roman += arr[numArr[0] - 1];
  }
  if (num < 10) {
    roman = arr[num - 1];
  }
  return roman;
}
// console.log(convertToRomanNumerals(500));
/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        str += 'minus';
        break;
      case '.':
        str += 'point';
        break;
      case ',':
        str += 'point';
        break;
      case '0':
        str += 'zero';
        break;
      case '1':
        str += 'one';
        break;
      case '2':
        str += 'two';
        break;
      case '3':
        str += 'three';
        break;
      case '4':
        str += 'four';
        break;
      case '5':
        str += 'five';
        break;
      case '6':
        str += 'six';
        break;
      case '7':
        str += 'seven';
        break;
      case '8':
        str += 'eight';
        break;
      case '9':
        str += 'nine';
        break;
      default:
        str += '';
    }
    if (i !== numberStr.length - 1) {
      str += ' ';
    }
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let invertStr = '';
  for (let i = str.length - 1; i !== -1; i -= 1) {
    invertStr += str[i];
  }
  return str === invertStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  const arr = [];
  let i = 0;
  while (number >= 1) {
    arr[i] = number % 10;
    number = Math.floor(number / 10);
    i += 1;
  }
  for (let j = 0; j < arr.length; j += 1) {
    if (arr[j] === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      left += arr[j];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      right += arr[k];
    }
    if (left === right) {
      return i;
    }
    left = 0;
    right = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  let left = 0;
  let right = size - 1;
  let top = 0;
  let bottom = size - 1;
  for (let i = 1; i <= size; i += 1) {
    const row = [];
    for (let n = 1; n <= size; n += 1) {
      row[n - 1] = 1;
    }
    arr[i - 1] = row;
  }
  let index = 1;
  while (index <= size ** 2) {
    for (let i = left; i <= right; i += 1) {
      arr[top][i] = index;
      index += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      arr[i][right] = index;
      index += 1;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      arr[bottom][i] = index;
      index += 1;
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i -= 1) {
      arr[i][left] = index;
      index += 1;
    }
    left += 1;
  }
  return arr;
}

// function getSpiralMatrix(size) {
//   const arr = [];
//   let k = 1;
//   for (let i = 1; i <= size; i += 1) {
//     const row = [];
//     for (let n = 1; n <= size; n += 1) {
//       row[n - 1] = 1;
//       k += 1;
//     }
//     arr[i - 1] = row;
//   }

//   k = 1;
//   for (let i = 0; i < size; i += 1) {
//     for (let j = 0; j < size - i; j += 1) {
//       if (i === 0 || i % 2 === 0) {
//         arr[i][j] = k;
//       }

//       k += 1;
//     }
//   }

//   return arr;
// }
// console.log(getSpiralMatrix(4));
/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rMatrix = matrix;
  const n = matrix.length;
  const temp = Array(n);
  for (let i = 0; i < n; i += 1) {
    temp[i] = Array(n);
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      temp[j][n - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      rMatrix[i][j] = temp[i][j];
    }
  }

  return rMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
// function sortByAsc(arr) {
//   if (arr.length === 0) return [];
//   const a = [];
//   const b = [];
//   const p = arr[0];

//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] < p) a.push(arr[i]);
//     else b.push(arr[i]);
//   }
//   return sortByAsc(a).concat(p, sortByAsc(b));
// }
function sortByAsc(arr, left = 0, right = arr.length - 1) {
  const mas = arr;
  function pivot(mas2, start = 0, end = arr.length - 1) {
    const pivotVal = arr[start];
    let swapIdx = start;
    const pmas = mas2;
    for (let i = start + 1; i <= end; i += 1) {
      if (pivotVal > arr[i]) {
        swapIdx += 1;
        [pmas[swapIdx], pmas[i]] = [arr[i], arr[swapIdx]];
      }
    }

    [pmas[start], pmas[swapIdx]] = [arr[swapIdx], arr[start]];
    return swapIdx;
  }
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    sortByAsc(arr, left, pivotIndex - 1);
    sortByAsc(arr, pivotIndex + 1, right);
  }
  return mas;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let left;
  let right;
  let result = str;
  let i = iterations;
  const len = str.length;
  while (i > 0) {
    right = '';
    left = '';
    for (let k = 0; k < len; k += 1) {
      if (k % 2 === 0) {
        left += result[k];
      } else {
        right += result[k];
      }
    }
    i -= 1;
    result = left + right;
    if (result === str) {
      i = iterations % (iterations - i);
    }
  }

  return result;
}

// console.log(shuffleChar('qwertyuiop', 20))

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
  // let num = number;
  // const arr = [];

  // while (num >= 1) {
  //   arr.push(num % 10);
  //   num = Math.floor(num / 10);
  // }

  // arr.reverse();

  // let hasHearestBigger = false;

  // for (let i = 0; i < arr.length - 1; i += 1) {
  //   if (arr[i + 1] > arr[i]) {
  //     hasHearestBigger = true;
  //   }
  // }

  // if (!hasHearestBigger) {
  //   return number;
  // }

  // return arr;
}
// console.log(getNearestBigger(54321));
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
