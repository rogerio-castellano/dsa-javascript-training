import { ArrayBase } from "./array-base";

export class Array extends ArrayBase {

  constructor(initialSize) {
    super(initialSize);
  }

  insert(value) {
    this.items[this.count++] = value;
  }

  removeAt(index) {
    if(index < 0 || index >= this.count)
      throw new Error('Invalid index');
    for(let i = index; i <= this.count - 2; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.count--;
  }

  indexOf(value) {
    for(let i = 0; i < this.count; i++){
      if(this.items[i] == value) {
        return i;
      }
    }
    return -1;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }
}
