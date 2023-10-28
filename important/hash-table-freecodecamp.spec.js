import {
  average
} from "./hash-table-freecodecamp";
import each from "jest-each";

describe("Hash table tests", () => {
  each([
    [2, 1, 1.5],
    [4, 2, 3],
    [1, 2, 1.5],
  ]).test(
    "returns the test result from %s and %s, expecting %s",
    (a, b, expected) => {
      expect(average(a, b)).toBe(expected);
    }
  );

  });

