/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = [];
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
    return this._list[0] || null;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this._list.length;
  }
}

module.exports = Stack;