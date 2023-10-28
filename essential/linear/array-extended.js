import { ArrayExtendedBase } from "./array-extended-base";

export class ArrayExtended extends ArrayExtendedBase {

  constructor(initialSize) {
    super(initialSize);
  }

  max() {
    if (this.count == 0)
      throw new Error('Invalid operation');

    let result = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < this.count; i++) {
      let current = this.items[i];
      if (current > result)
        result = current;
    }
    return result;
  }

  intersect(array2) {
    let result = new Array();
    let index = 0;

    for (let i = 0; i < this.count; i++) {
      let current = this.items[i];
      if (array2.contains(current))
        result[index++] = current;
    }
    return result;
  }

  reverse() { 
    let result = new Array();
    let index = 0;

    for(let i = this.count - 1; i >=0; i--) {
      result[index++] = this.items[i];
    }
    return result;

   }

  insertAt(value, index) { 
    for(let i = this.count - 1; i >= index ; i--)
      this.items[i + 1] = this.items[i];

      this.count++;
      this.items[index] = value;
   }
}


