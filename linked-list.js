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
    //this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    newNode.next = this.head;
    this.head = newNode;
    //this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.head === null){
      throw new Error("List is empty")
    }
    const current = this.head;
    const tail = this.tail;
    while(current !== null){
      if(current.next === this.tail){
        this.tail = current;
        this.tail.next = null;
        break;
      }
      current = current.next;
    }
    return tail;
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

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
