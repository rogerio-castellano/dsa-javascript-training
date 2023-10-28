export class ArrayBase {

  constructor(initialSize) {
    this.items = new Array(initialSize);
    this.count = 0;
  }

  insert(value) { throw Error('Not implemented') }
  removeAt(index) { throw Error('Not implemented') }
  indexOf(value) { throw Error('Not implemented') }
  contains(value) { throw Error('Not implemented') }

  getItems() {
    let result = new Array(this.count);

    for(let i = 0; i < this.count; i++)
      result[i] = this.items[i];
    return result;
  }
}

