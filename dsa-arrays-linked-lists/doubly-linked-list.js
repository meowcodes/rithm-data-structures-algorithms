class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  push(val) {
    let newNode = new Node(val);
    
    if(this.head){
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    
    this.tail = newNode;
    this.length++;
  }

  unshift(val) {
    let newNode = new Node(val);

    if(this.head){
      newNode.next = this.head;
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    
    this.head = newNode;
    this.length++;
  }

  pop() {
    if(this.length === 0) throw new Error("list is empty");

    let popNode = this.tail;
    if(popNode.prev){
      this.tail = popNode.prev
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return popNode.val;
  }

  shift() {
    if(this.length === 0) throw new Error("list is empty");
    
    let shiftNode = this.head;
    if(shiftNode.next) {
      this.head = shiftNode.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return shiftNode.val;
  }

  getAt(idx) {
    if(idx >= this.length) throw new Error("invalid index");
    let curr = this.head;
    let i = 0;
    
    while(i < idx){
      if(curr.next){
        curr = curr.next;
      }
      i++;
    }

    return curr.val;
  }

  setAt(idx,val) {
    if(idx >= this.length) throw new Error("invalid index");
    let curr = this.head;
    let i = 0;
    
    while(i < idx) {
      if(curr.next) {
        curr = curr.next;
      }
      i++;
    }

    curr.val = val;

    return curr.val;
  }

  insertAt(idx, val) {
    if(!this.head || idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);

    let newNode = new Node(val);
    let curr = this.head;
    let i = 0;

    while(i < idx - 1) {
      if(curr.next) {
        curr = curr.next;
      }
      i++;
    }

    curr.next.prev = newNode;
    newNode.next = curr.next;
    curr.next = newNode;
    newNode.prev = curr;
    this.length++;
  }

  removeAt(idx) {
    if(!this.head || idx === 0) return this.shift();
    if(idx === this.length - 1) return this.pop();

    let curr = this.head;
    let i = 0;

    while(i < idx - 1) {
      if(curr.next) {
        curr = curr.next;
      }
      i++;
    }

    if(curr.next.next){
      curr.next = curr.next.next;
      curr.next.prev = curr;
    } else {
      curr.next = null;
    }

    this.length--;
    return curr.val;
  }

  average() {
    if(!this.head) return 0;
    
    let curr = this.head;
    let sum = 0;

    while(curr){
      sum += curr.val;
      curr = curr.next;
    }

    return sum/this.length;
  }
}

module.exports = DoublyLinkedList;