/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(this.tail === null){
      this.tail = newNode;
      this.head = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.head === null){
      throw new Error("List is empty")
    }
    let current = this.head;
    const tail = this.tail;
    while(current !== null){
      if(current.next === this.tail){
        this.tail = current;
        break;
      }
      current = current.next;
    }
    this.legnth--;
    return tail;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error("List is empty")
    }

    const head = this.head;
    this.head = head.next;

    this.length--;
    return head;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length || idx <= 0) {
      throw new Error('Index is invalid');
    }

    let current = this.head;
    let count = 1;

    while (current !== null) {
      if (count === idx) {
        return current;
      }
      current = current.next;
      count++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length || idx <= 0) {
      throw new Error('Index is invalid');
    }

    const newNode = new Node(val);
    const current = this.head;
    let count = 1;

    while (current !== null) {
      if (count === idx) {
        newNode.next = current;
        current = newNode;
      }
      current = current.next;
      count++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
