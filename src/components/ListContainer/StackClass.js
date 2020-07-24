class StackNode {
  data = null;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

class Stack {
  head = null;
  size = 0;

  push(data) {
    const newNode = new StackNode(data);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.head = newNode;

    return ++this.size;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const poppedData = this.head;

    if (this.size === 1) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }

    this.size--;

    return poppedData;
  }
}
