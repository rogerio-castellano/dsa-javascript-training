import {
  factorial
} from "./factorial";
import each from "jest-each";

describe("Factorial", () => {
  each([
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [10, 3628800],
  ]).test(
    "returns the factorial of %s, expecting %s",
    (n, expected) => {
      expect(factorial(n)).toBe(expected);
    }
  );

  });

