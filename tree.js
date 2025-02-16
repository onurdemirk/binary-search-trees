import { Node } from "/node.js";

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(arr) {
    if (!arr.length) return null;

    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);

    const build = (start, end) => {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);
      const node = new Node(sortedArr[mid]);

      node.left = build(start, mid - 1);
      node.right = build(mid + 1, end);

      return node;
    };
    return build(0, sortedArr.length - 1);
  }

  insert(value) {
    const newNode = new Node(value);
    let current = this.root;

    while (current) {
      parent = current;

      if (value > current.data) {
        current = current.right;
      } else if (value < current.data) {
        current = current.left;
      }
    }

    if (value < parent.data) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  find(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.data) {
        return current;
      } else if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }

    const traverse = (queue) => {
      if (queue.length === 0) return;

      const currentNode = queue.shift();

      callback(currentNode);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      traverse(queue);
    };

    traverse([this.root]);
  }

  inOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }

    const traverse = (node) => {
      if (!node) return;

      traverse(node.left);
      callback(node);
      traverse(node.right);
    };

    traverse(this.root);
  }

  preOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }

    const traverse = (node) => {
      if (!node) return;

      callback(node);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
  }

  height(value) {
    let current = this.root;
   let targetNode = null;

    while (current !== null) {
      if (value === current.data) {
        targetNode = current;
        break;
      } else if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
  }

  if (targetNode === null) return -1;

  const calculateHeight = (node) => {
    if (node === null) return -1; 
    const left = calculateHeight(node.left);
    const right = calculateHeight(node.right);
    return 1 + Math.max(left, right); 
  };

  return calculateHeight(targetNode);

}
}
