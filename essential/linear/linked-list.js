import { LinkedListBase, Node } from "./linked-list-base.js";

export class LinkedList extends LinkedListBase {
  addLast(value) {
    let newNode = new Node(value);

    if(!this.first) {
      this.first = this.last = newNode;
    } else {
      let node = this.first;
      while(node.next) {
        node = node.next;
      }
      this.last = node.next = newNode;
    }
  }

  addFirst(value) {
    let newNode = new Node(value);

    if(!this.first) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
  }

  indexOf(value) {
    let node = this.first;
    let index = 0;

    while(node) {
      if(node.value === value)
        return index;
      index++;
      node = node.next;
    }

    return -1;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }

  removeFirst() {
    if(!this.first)
      return;

    this.first = this.first.next;
    if(this.first === null) {
      this.last = null;
    }
  }

  removeLast() {
    if(!this.last)
      return;
    if(this.first == this.last)
    {
      this.first = this.last = null;
      return;
    }
    let node = this.first;
    while(node.next.next)
    {
      node = node.next;
    }

    this.last = node;
  }

  size() {
    let result = 0;
    let node = this.first;
    while(node)
    {
      result++;
      node = node.next;
    }

    return result;
  }
}
