/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if(this.head) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if(this.head) {
      newNode.next = this.head;
    }else {
      this.tail = newNode;
    }

    this.head = newNode;
    this.length ++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head) throw new Error("no items in list");

    let curr = this.head;
    let popNode = this.tail;

    // find second to last val;
    if(curr.next){

      while(curr.next.next) {
        curr = curr.next;
      }

      this.tail = curr;
      curr.next = null;
    }else {
      this.head =  null;
      this.tail = null;
    }

    this.length--;

    return popNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head) throw new Error("no items in list");
    let shiftNode = this.head;

    if(this.head.next){
      this.head = shiftNode.next;
    }else {
      this.head =  null;
      this.tail = null;
    }

    this.length--;

    return shiftNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let curr = this.head;
    
    let i = 0;
    while(i < idx){
      if(curr){
        curr = curr.next;
        i ++
      } else {
        throw new Error("invalid index");
      }
    }

    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let curr = this.head;
    
    let i = 0;
    while(i < idx){
      if(curr){
        curr = curr.next;
        i ++
      } else {
        throw new Error("invalid index");
      }
    }

    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(!this.head) return this.push(val);
    let curr = this.head;
    let newNode = new Node(val);

    let i = 0;
    while(i < idx - 1){
      if(curr){
        curr = curr.next;
        i ++
      } else {
        throw new Error("invalid index");
      }
    }

    if(curr.next){
      newNode.next = curr.next;
    }else {
      this.tail = newNode;
    }

    curr.next = newNode;
    this.length++;

    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx === 0){
      return this.shift();
    }

    let curr = this.head;

    let i = 0;
    while(i < idx - 1){
      if(curr.next){
        curr = curr.next;
        i ++
      } else {
        throw new Error("invalid index");
      }
    }

    if(curr.next && curr.next.next){
      let newNext = curr.next.next
      curr.next = newNext;
    }else {
      this.tail = curr;
      curr.next = null;
    }

    this.length--;

    return undefined;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head) return 0;
    
    let curr = this.head;
    let sum = this.head.val;

    while(curr.next){
      curr = curr.next;
      sum += curr.val;
    }

    return sum/this.length;
  }
}

module.exports = LinkedList;
