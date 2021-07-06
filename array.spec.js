//ES 5
// const each = require("jest-each").default;
// const sum = require("./operations");

//ES 6
import { sum } from "./array";
import each from "jest-each";

describe("Arithmetic tests", () => {
  test("Sum ", () => {
    expect(sum(1, 2)).toBe(3);
  });

  each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ]).test("returns the result of adding %s to %s", (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
  });
});
