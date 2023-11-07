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
    const newNode = new Node(val);
    newNode.next = this.head;

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */
  /**
   * input = {val:5, next:null}
   *          this.head  this.tail           this.length = 1
   *
   * end = 5
   * current = {val:5, next:null}
   * this.tail = {val:5, next:null}
   */

  pop() {
    if(this.head === null){
      throw new Error("List is empty")
    }

    let end = this.tail.val;
    if(this.length === 1){
      this.head = null;
      this.tail =null;
      this.length = 0;
      return end;
    }
    //find value prior to the tail
    let current = this.head

    while(current !== null){
      if(current.next === this.tail){
        //reassign the prior value as the new tail
        this.tail = current;
        this.tail.next = null;
        console.log(current, " current value in each iteration.")
        break;
      }
      current = current.next
      console.log(current, " current after incrementation")
    }

    this.length--;

    return end
    //return the prior tail.val



    // let current = this.head;//{val:5, next:10}
    // const tail = this.tail;//{val:10, next:null}
    // while(current !== null){
    //   if(current.next === this.tail){
    //     this.tail = current;
    //     break;
    //   }
    //   current = current.next;
    // }
    // this.length--;

    // return tail.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error("List is empty")
    }

    const head = this.head;
    this.head = head.next;

    this.length--;
    return head.val;
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
