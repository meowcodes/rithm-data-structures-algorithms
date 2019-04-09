/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = [];
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    return this._list.push(val);
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    return this._list.unshift();
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._list[0] || null;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this._list.length;
  }
}

module.exports = Queue;
