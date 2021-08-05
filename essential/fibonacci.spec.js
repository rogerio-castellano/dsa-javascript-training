import {
  fibonacci
} from "./fibonacci";
import each from "jest-each";

describe("Fibonacci", () => {
  each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [10, 55],
  ]).test(
    "returns the Fibonacci factor %s, expecting %s",
    (n, expected) => {
      expect(fibonacci(n)).toBe(expected);
    }
  );

  });