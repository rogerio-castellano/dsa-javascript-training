import { Array } from "./array";
import each from "jest-each";

describe("Array tests", () => {
  let array;

  beforeEach( () => {
    array = new Array(1);
  }, 100);
   
  test(
    "insert one item",
    () => {
      array.insert(1);

      expect(array.getItems()[0]).toBe(1);
    }
  );

  test(
    "insert two items resizing array",
    () => {
      array.insert(1);
      array.insert(2);

      expect(array.getItems()[0]).toBe(1);
      expect(array.getItems()[1]).toBe(2);
    }
  );

 test(
    "remove one element from an one-element array",
    () => {
      array.insert(1);

      array.removeAt(0);
      
      expect(array.count).toBe(0);
    }
  );

  test(
    "remove first element from a two-element array",
    () => {
      array.insert(1);
      array.insert(2);

      array.removeAt(0);

      expect(array.getItems()[0]).toBe(2);
      expect(array.count).toBe(1);
    }
  );
  
  test(
    "remove index under zero raises error",
    () => {
      expect(() => array.removeAt(-1)).toThrowError();
    }
  );  

  test(
    "remove index over upper bound raises error",
    () => {
      array.insert(1);

      expect(() => array.removeAt(1)).toThrowError();
    }
  );

  each([
    [[1], 1, 0],
    [[1, 2], 1, 0],
    [[1, 2], 2, 1],
    [[1, 2, 3], 2, 1],
  ]).test(
    "from array %s get element %s, expected %s",
    (items, value, expected) => {
      loadElements(array, items);

      const index = array.indexOf(value);

      expect(index).toBe(expected);
    }
  );


    test(
      "index of non-existing element",
      () => {
        array.insert(1);
  
        const index = array.indexOf(2);
  
        expect(index).toBe(-1);
      }
    );

    each([
      [[1], 1, true],
      [[1, 2], 1, true],
      [[1, 2], 2, true],
      [[1, 2, 3], 2, true],
      [[1, 2], 3, false],
    ]).test(
      "from array %s get element %s, expected %s",
      (items, value, expected) => {
        loadElements(array, items);
  
        const contains = array.contains(value);
  
        expect(contains).toBe(expected);
      }
    );

});

  function loadElements(array, items) {
    for(let i = 0; i < items.length; i++) {
      array.insert(items[i]);
    }

  }

