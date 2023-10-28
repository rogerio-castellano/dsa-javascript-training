export class StackBase {
    constructor() {
        this.items = new Array(4);
        this.count = 0;
      }
    
      push(item) { throw Error('Not implemented') }
      pop() { throw Error('Not implemented') }
      peek() { throw Error('Not implemented') }
      isEmpty() { throw Error('Not implemented') }

      getItems() {
        return this.items;
      }
}
