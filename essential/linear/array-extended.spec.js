import { ArrayExtended } from "./array-extended";
import { Array } from "./array";
import each from "jest-each";

describe("Array extended tests", () => {
  let array;

  beforeEach( () => {
    array = new ArrayExtended(1);
  }, 100);
  each([
    [[1], 1],
    [[1, 2], 2],
    [[3, 2, 1], 3],
    [[1, 2, 3], 3],
  ]).test(
    "from array %s get max value, expected %s",
    (items, expected) => {
      loadElements(array, items);

      const index = array.max();

      expect(index).toBe(expected);
    }
  );

  test(
    "max value from an empty array raises error",
    () => {
      expect(() => array.max()).toThrowError();
    }
  );  


  each([
    [[1], [1], [1]],
    [[1, 2], [1], [1]],
    [[1, 2, 3, 4], [1, 4], [1, 4]],
    [[1, 2, 3, 4], [1, 5], [1]],
    [[1, 2, 3], [4, 5], []],
  ]).test(
    "intersect elements from arrays %s and $s, expected %s",
    (items1, items2, expected) => {
      loadElements(array, items1);
      let array2 = new Array(items2.length);
      loadElements(array2, items2);

      const index = array.intersect(array2);

      expect(index).toStrictEqual(expected);
    }
  );


  each([
    [[1], [1]],
    [[1, 2], [2, 1]],
    [[1, 2, 3], [3, 2, 1]],
    [[3, 2, 1], [1, 2, 3]],
  ]).test(
    "reverse array %s, expected %s",
    (items, expected) => {
      loadElements(array, items);

      const result = array.reverse();

      expect(result).toStrictEqual(expected);
    }
  );

  each([
    [[2], 1, 0, [1, 2]],
    [[1, 3, 4], 2, 1, [1, 2, 3, 4]],
    [[2, 3, 4], 1, 0, [1, 2, 3, 4]],
    [[1, 2, 3], 4, 3, [1, 2, 3, 4]],
  ]).test(
    "insert into array %s item %s at position %, expected %s",
    (items, value, index, expected) => {
      loadElements(array, items);

      array.insertAt(value, index);
      expect(array.getItems()).toStrictEqual(expected);
    }
  );

});

  function loadElements(array, items) {
    for(let i = 0; i < items.length; i++) {
      array.insert(items[i]);
    }
  }

