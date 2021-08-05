export class LinkedListBase {

  addLast(value) { throw Error('Not implemented') }
  addFirst(value) { throw Error('Not implemented') }
  indexOf(value) { throw Error('Not implemented') }
  contains(value) { throw Error('Not implemented') }
  removeFirst() { throw Error('Not implemented') }
  removeLast() { throw Error('Not implemented') }
  size() { throw Error('Not implemented') }



  getLast() {
    return this.last;
  }

  getFirst() {
    return this.first;
  }
}

export class Node {
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}