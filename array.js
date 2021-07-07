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
  console.log("Keys", keys, "Values", values);
  console.log("Keys[0]", keys[0], "Keys[1]", keys[1]);
  console.log("values[0]", values[0], "values[1]", values[1]);

  for (let i = 0; i < values.length; i++) {
    if (values[i] == 1) return keys[i];
  }

  return Number.MAX_SAFE_INTEGER;
}
