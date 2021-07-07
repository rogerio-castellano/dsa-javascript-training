//ES 5
// const each = require("jest-each").default;
// const sum = require("./operations");

//ES 6
import { secondMin, firstNonRepeatingElement } from "./array";
import each from "jest-each";

describe("Array tests", () => {
  //   test("Sum ", () => {
  //     const array = [1, 2];
  //     expect(secondMin(array)).toBe(1);
  //   });

  // each([
  //   [[1, 2], 2],
  //   [[3, 2, 1, 0], 1],
  //   [[-2, 2, 4], 2],
  // ]).test("returns the second minimum element", (array, expected) => {
  //   expect(secondMin(array)).toBe(expected);
  // });

  each([
    [[1, 2], 1],
    [[1, 1, 2], 2],
    [[1, 2, 1], 2],
  ]).test("returns the first non repeating element", (array, expected) => {
    expect(firstNonRepeatingElement(array)).toBe(expected);
  });
});
