class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    } else {
      let prevNode = this.head;
      let currNode = this.head;
      while (currNode.next !== null) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return currNode;
    }
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    } else {
      let prevHead = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return prevHead;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    } else {
      let currNode = this.head;
      for (let i = 0; i < index; i++) {
        currNode = currNode.next;
      }
      return currNode.val;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}
