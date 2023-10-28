export class QueueBase {
    constructor(initialSize) {
        this.items = new Array(initialSize);
        this.count = 0;
      }
    
      enqueue(item) { throw Error('Not implemented') }
      dequeue() { throw Error('Not implemented') }
      peek() { throw Error('Not implemented') }
      isEmpty() { throw Error('Not implemented') }
      isFull() { throw Error('Not implemented') }

      getItems() {
        return this.items;
      }
}
