import { Tree } from "/tree.js";
import { prettyPrint } from "/prettyprint.js";

const values = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const myTree = new Tree(values);

console.log("Returns the tree: ");
prettyPrint(myTree.root);

console.log("Insert 42: ");
myTree.insert(42);
prettyPrint(myTree.root);

console.log("Returns the node for the value of 67: ");
prettyPrint(myTree.find(67));

console.log("Level Order: ");
myTree.levelOrder((callback) => {
  console.log(callback);
});

console.log("In Order: ");
myTree.inOrder((callback) => {
  console.log(callback);
});

console.log("Pre Order: ");
myTree.preOrder((callback) => {
  console.log(callback);
});

console.log("Height of 67: ");
console.log(myTree.height(67));

