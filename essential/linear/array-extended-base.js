import { Array } from "./array";

export class ArrayExtendedBase extends Array {

  constructor(initialSize) {
    super(initialSize);
  }

  max() { throw Error('Not implemented') }
  intersect(secondArray) { throw Error('Not implemented') }
  reverse() { throw Error('Not implemented') }
  insertAt(item, index) { throw Error('Not implemented') }
}

