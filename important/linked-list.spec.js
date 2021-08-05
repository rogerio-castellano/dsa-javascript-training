import {
  LinkedList
} from "./linked-list";
import each from "jest-each";

describe("Linked list tests", () => {
  let list;

  beforeEach( () => {
    list = new LinkedList();
  }, 1000);
   
  test(
    "add last one item",
    () => {
      list.addLast(1);

      expect(list.getLast().value).toBe(1);
    }
  );

  test(
    "add last two items",
    () => {
      list.addLast(1);
      list.addLast(2);

      expect(list.getFirst().value).toBe(1);
      expect(list.getLast().value).toBe(2);
    }
  );

 test(
    "add first one item",
    () => {
      list.addFirst(1);
      
      expect(list.getFirst().value).toBe(1);
    }
  );

  test(
    "add first two items",
    () => {
      list.addFirst(2);
      list.addFirst(1);

      expect(list.getFirst().value).toBe(1);
      expect(list.getLast().value).toBe(2);
    }
  );

  each([
    [[1], 1, 0],
    [[1, 2], 1, 0],
    [[1, 2], 2, 1],
    [[1, 2, 3], 2, 1],
  ]).test(
    "list %s contains value %s in position %s",
    (items, value, expected) => {
      loadElements(list, items);

      const index = list.indexOf(value);

      expect(index).toBe(expected);
    }
  );
    test(
      "list does not contain value",
      () => {
        list.addLast(1);
  
        const index = list.indexOf(2);
  
        expect(index).toBe(-1);
      }
    );
  
    each([
      [[1], 1],
      [[1, 2], 1],
      [[1, 2], 2],
      [[1, 2, 3], 2],
    ]).test(
      "list %s contains value %s",
      (items, value) => {
        loadElements(list, items);
  
        const contains = list.contains(value);
  
        expect(contains).toBe(true);
      }
    );
    
      test(
        "list does not contain value",
        () => {
          list.addLast(1);
    
          const contains = list.contains(2);
    
          expect(contains).toBe(false);
        }
      );

      test(
        "remove first from one item list",
        () => {
          list.addLast(1);

          list.removeFirst();
    
          expect(list.getFirst()).toBeNull();
        }
      );
    
      test(
        "remove first from two items list",
        () => {
          list.addLast(1);
          list.addLast(2);
    
          list.removeFirst();

          expect(list.getFirst().value).toBe(2);
        }
      );

      test(
        "remove last from one item list",
        () => {
          list.addLast(1);

          list.removeLast();
    
          expect(list.getLast()).toBeNull();
        }
      );
    
      test(
        "remove last from two items list",
        () => {
          list.addLast(1);
          list.addLast(2);
    
          list.removeLast();

          expect(list.getLast().value).toBe(1);
        }
      );

      each([
        [[], 0],
        [[1], 1],
        [[1, 2], 2],
        [[1, 2, 3], 3],
      ]).test(
        "list %s returns size %S",
        (items, expected) => {
          loadElements(list, items);
    
          const size = list.size();
    
          expect(size).toBe(expected);
        }
      );

  });


  function loadElements(list, items) {
    for(let i = 0; i < items.length; i++) {
      list.addLast(items[i]);
    }

    // items.forEach = function(item) {
    //   list.addLast(item);
    //     }

    //     for(let item in items) {
    //       list.addLast(item);
    //     }

  }

