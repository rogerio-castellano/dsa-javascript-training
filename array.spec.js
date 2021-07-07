//ES 5
// const each = require("jest-each").default;
// const sum = require("./operations");

//ES 6
import {
  secondMin,
  firstNonRepeatingElement,
  mergeTwoSortedArrays,
  rearrangePositiveNegative,
} from "./array";
import each from "jest-each";

describe("Array tests", () => {
  each([
    [[1, 2], 2],
    [[3, 2, 1, 0], 1],
    [[-2, 2, 4], 2],
  ]).test(
    "returns the second minimum element from %s, expecting %s",
    (array, expected) => {
      expect(secondMin(array)).toBe(expected);
    }
  );

  each([
    [[1, 2], 1],
    [[1, 1, 2], 2],
    [[1, 2, 1], 2],
  ]).test(
    "returns the first non repeating from element %s, expecting %s",
    (array, expected) => {
      expect(firstNonRepeatingElement(array)).toBe(expected);
    }
  );

  each([
    [[1], [2], [1, 2]],
    [[1], [], [1]],
    [[], [2], [2]],
    [
      [1, 2],
      [2, 3],
      [1, 2, 2, 3],
    ],
    [
      [1, 3, 5, 7],
      [2, 4, 6, 8],
      [1, 2, 3, 4, 5, 6, 7, 8],
    ],
    [[], [], []],
  ]).test(
    "returns two sorted arrays merged from elements %s and %s, expecting %s",
    (array1, array2, expected) => {
      expect(mergeTwoSortedArrays(array1, array2)).toEqual(expected);
    }
  );

  each([
    [
      [1, -1],
      [1, -1],
    ],
    [
      [-1, 1],
      [1, -1],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [-1, -2, -3],
      [-1, -2, -3],
    ],
    [
      [-1, 2, -3, 4],
      [2, -1, 4, -3],
    ],
  ]).test(
    "returns the rearranged positive and negative from element %s, expecting %s",
    (array, expected) => {
      expect(rearrangePositiveNegative(array)).toEqual(expected);
    }
  );
});

// test("Ret ", () => {
//   const array = [1, 2];
//   expect(secondMin(array)).toBe(1);
// });
