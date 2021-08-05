import {
  mergeSort
} from "./sorting";
import each from "jest-each";

/*
        [InlineData(new int[] { }, new int[] { })]
        [InlineData(new[] { 1 }, new[] { 1 })]
        [InlineData(new[] { 2, 1 }, new[] { 1, 2 })]
        [InlineData(new[] { 3, 2, 1 }, new[] { 1, 2, 3 })]
        [InlineData(new[] { 1, 2, 1 }, new[] { 1, 1, 2 })]
        [InlineData(new[] { 1, 2, 3 }, new[] { 1, 2, 3 })]
*/
describe("Sorting tests", () => {
  each([
    [[], []],
    [[1], [1]],
    [[2,1], [1,2]],
    [[3,2,1], [1,2,3]],
    [[1,2,1], [1,1,2]],
    [[1,2,3], [1,2,3]]
  ]).test.only(
    "Merge sort the test result from %s, expecting %s",
    (a,expected) => {
      expect(mergeSort(a)).toEqual(expected);
    }
  );

  each([
    [[], []],
    [[1], [1]],
    [[2,1], [1,2]],
    [[3,2,1], [1,2,3]],
    [[1,2,1], [1,1,2]],
    [[1,2,3], [1,2,3]]
  ]).test.only(
    "Quick sort the test result from %s, expecting %s",
    (a,expected) => {
      expect(mergeSort(a)).toEqual(expected);
    }
  );

  });

