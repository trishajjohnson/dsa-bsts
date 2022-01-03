class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val, node=this.root) {
    if(!node) {
      this.root = new Node(val);
      return this;
    }

    let currentNode = node;

    while(currentNode) {
      if(val > currentNode.val && !currentNode.right) {
        currentNode.right = new Node(val);
        return this;
      }
      if(val > currentNode.val && currentNode.right) currentNode = currentNode.right;
      if(val < currentNode.val && !currentNode.left) {
        currentNode.left = new Node(val);
        return this;
      }
      if(val < currentNode.val && currentNode.left) currentNode = currentNode.left;
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    if(!node) {
      this.root = new Node(val);
      return this;
    };

    if(val > node.val && node.right) return this.insert(val, node=node.right);
    if(val > node.val && !node.right) {
      node.right = new Node(val);
      return this;
    }
    if(val < node.val && node.left) return this.insert(val, node=node.left);
    if(val < node.val && !node.left) {
      node.left = new Node(val);
      return this;
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val, node=this.root) {
    if(!node) return;

    let currentNode = node;

    while(currentNode) {
      if(currentNode.val === val) return currentNode;
      if(val < currentNode.val && currentNode.left) currentNode = currentNode.left;
      if(val < currentNode.val && !currentNode.left) return;
      if(val > currentNode.val && currentNode.right) currentNode = currentNode.right;
      if(val > currentNode.val && !currentNode.right) return;
    }
    
  }


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if(!node) return;

    if(val === node.val) return node;
    if(val < node.val && node.left) return this.findRecursively(val, node.left);
    if(val < node.val && !node.left) return;
    if(val > node.val && node.right) return this.findRecursively(val, node.right);
    if(val < node.val && !node.right) return;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, arr=[]) {
    if(!node) return arr;

    arr.push(node.val);
    if(node.left) this.dfsPreOrder(node.left, arr);
    if(node.right) this.dfsPreOrder(node.right, arr);

    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, arr=[]) {
    if(!node) return arr;

    if (node.left) this.dfsInOrder(node.left, arr);
    arr.push(node.val);
    if (node.right) this.dfsInOrder(node.right, arr);

    return arr;
  }


  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root, arr=[]) {
    if(!node) return arr;

    if (node.left) this.dfsPostOrder(node.left, arr);
    if (node.right) this.dfsPostOrder(node.right, arr);
    arr.push(node.val);

    return arr;
  }


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node=this.root) {
    if(!node) return arr;

    let arr = [];
    let queueToVisit = [this.root];

    while(queueToVisit.length) {
      const currentNode = queueToVisit.shift();
      arr.push(currentNode.val);
      if(currentNode.left) queueToVisit.push(currentNode.left);
      if(currentNode.right) queueToVisit.push(currentNode.right);
    }

    return arr;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}
// const E = new Node("E");
// const B = new Node("B");
// const A = new Node("A");
// const D = new Node("D");
// const G = new Node("G");
// const F = new Node("F");

// E.left = B;
// E.right = G;
// B.left = A;
// B.right = D;
// E.right = G;
// G.left = F;

// const tree = new BinarySearchTree(E);

// tree.insert("H");

module.exports = BinarySearchTree;
