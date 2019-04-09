const LinkedList = require('../dsa-arrays-linked-lists/linked-list');

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList();
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    return this._list.unshift(val);
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    return this._list.shift();
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val || null;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.size;
  }
}

module.exports = Stack;