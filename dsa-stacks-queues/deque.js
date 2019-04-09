class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  appendleft(val) {
    let newNode = new Node(val);

    if(this.first){
      this.first.prev = newNode;
      newNode.next = this.first;
    } else {
      this.last = newNode;
    }

    this.first = newNode;
    this.size++;
  }

  appendright(val) {
    let newNode = new Node(val);

    if(this.last){
      newNode.prev = this.last;
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
    this.size++;
  }

  popleft() {
    if(this.size === 0) throw new Error("deque is empty");

    let popNode = this.first

    if(this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popNode.next;
      this.first.prev = null;
    }

    this.size--;
    return popNode.val;
  }

  popright() {
    if(this.size === 0) throw new Error("deque is empty");

    let popNode = this.last;

    if(this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.last = popNode.prev;
      this.last.next = null;
    }

    this.size--;
    return popNode.val;
  }

  peekleft() {
    return this.first.val || null;
  }

  peekright() {
    return this.last.val || null;
  }

  isEmpty() {
    return !this.size;
  }
}

module.exports = Deque;
