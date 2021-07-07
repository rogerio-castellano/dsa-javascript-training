//ES 5
// const sum = (a, b) => {
//   return a + b;
// };
// module.exports = sum;

//ES 6
/*
Find the second minimum element of an array
First non-repeating integers in an array
Merge two sorted arrays
Rearrange positive and negative values in an array
*/
export function secondMin(array) {
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min1) {
      min2 = min1;
      min1 = array[i];
    } else if (array[i] < min2) {
      min2 = array[i];
    }
  }
  return min2;
}

export function firstNonRepeatingElement(array) {
  if (array.length == 1) return array[0];

  let keyValueIndex = 0;
  let keys = [];
  let values = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let keyIndex = keys.indexOf(value);
    if (keyIndex == -1) {
      keys[keyValueIndex] = value;
      values[keyValueIndex] = 1;
      keyValueIndex++;
    } else {
      values[keyIndex] = values[keyIndex] + 1;
    }
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] == 1) return keys[i];
  }

  return Number.MAX_SAFE_INTEGER;
}

export function mergeTwoSortedArrays(array1, array2) {
  let result = [];
  let i = 0;
  let i1 = 0;
  let i2 = 0;
  let exhausted1 = i1 >= array1.length;
  let exhausted2 = i2 >= array2.length;

  while (!exhausted1 || !exhausted2) {
    if (!exhausted1 && !exhausted2) {
      if (array1[i1] < array2[i2]) {
        result[i++] = array1[i1++];
      } else {
        result[i++] = array2[i2++];
      }
    } else if (exhausted1) {
      result[i++] = array2[i2++];
    } else {
      result[i++] = array1[i1++];
    }
    exhausted1 = i1 >= array1.length;
    exhausted2 = i2 >= array2.length;
  }
  return result;
}

export function rearrangePositiveNegative(array) {
  const pivot = 0;
  let i = 0;
  let b = -1;

  while (i < array.length) {
    if (array[i] < pivot) {
      b++;
      swap(array, b, i);
    }
    i++;
  }
  i = 0;
  let result = [];
  let iPositive = b + 1;
  let iNegative = 0;

  while (iNegative <= b || iPositive < array.length) {
    if (iPositive < array.length) result[i++] = array[iPositive++];
    if (iNegative <= b) result[i++] = array[iNegative++];
  }

  return result;

  function swap(array, i1, i2) {
    var temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
  }

}
