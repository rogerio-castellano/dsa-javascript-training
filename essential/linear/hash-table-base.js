export class HashTableBase {
    constructor() {
        this.items = new Array(4);
        this.count = 0;
      }
    
      put(key, value) { throw Error('Not implemented') }
      get(key) { throw Error('Not implemented') }
      remove(key) { throw Error('Not implemented') }

      getItems() {
        return this.items;
      }
}
