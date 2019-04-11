/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let min = Infinity;
    if(!this.root) return 0;

    function depth(node, count) {
      count++;

      // base case
      if(!node.left && !node.right){
        if(count < min){
          min = count;
        }
        return;
      } 
      
      if(node.left) depth(node.left, count);
  
      if(node.right) depth(node.right, count);
    }

    depth(this.root, 0);

    return min;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let max = 0;
    if(!this.root) return 0;

    function depth(node, count) {
      count++;

      // base case
      if(!node.left && !node.right){
        if(count > max){
          max = count;
        }
        return;
      } 
      
      if(node.left) depth(node.left, count);
  
      if(node.right) depth(node.right, count);
    }

    depth(this.root, 0);

    return max;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let min = null;
    if(!this.root) return null;

    function findMin(node){
      if(node.val > lowerBound) {
        if(min) {
          min = min < node.val ? min : node.val;
        }else {
          min = node.val;
        }
      }
      
      // base case
      if(!node.left && !node.right) return;

      if(node.left) findMin(node.left);
      if(node.right) findMin(node.right);
    }

    findMin(this.root);

    return min;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    // check how many level to node1 and node2;
    let parent = null;
    let level = [];
    if(!this.root) return null;

    function findLevel(parentNode, node, count) {
      count++;

      // base case
      if(node === node1 || node === node2){
        if(parent) {
          // falsey if parents are same
          if(parent === parentNode){
            level.push(null);
          }else {
            level.push(count);
          }
        }else {
          parent = parentNode;
          level.push(count);
        }
      } 

      if(node.left) findLevel(node, node.left, count);
  
      if(node.right) findLevel(node, node.right, count);
    }

    findLevel(null, this.root, 0);

    return level[0] === level[1] ? true : false;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    let str = "";
    if(!tree.root) return str;

    function stringify(node, dir) {
      str += dir + node.val;

      // base case
      if(!node.left && !node.right) {
        str += "e";
        return
      }
      
      if(node.left) stringify(node.left, "l");
  
      if(node.right) stringify(node.right, "r");
    }

    stringify(tree.root, "r");

    return str;
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // let root = new BinaryTreeNode(1);
  // root.left = new BinaryTreeNode(2);
  // root.right = new BinaryTreeNode(3);
  // root.right.left = new BinaryTreeNode(4);
  // root.right.right = new BinaryTreeNode(5);

  // myTree = new BinaryTree(root);

  static deserialize(stringTree) {
    if(!stringTree.length) return null;

    let i = 0;
    let root = new BinaryTreeNode(Number(stringTree[1]));

    function treefy(node) {
      if(stringTree[i + 2] === "e") {
        i += 3;
        return ;
      }

      i += 2;

      if(stringTree[i] === "l"){
        node.left = new BinaryTreeNode(Number(stringTree[i+1]));
        treefy(node.left);
      }
      
      if(stringTree[i] === "r"){
        node.right = new BinaryTreeNode(Number(stringTree[i+1]));
        treefy(node.right);
      }
    }

    treefy(root);

    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    if(!this.root) return null;
    let ancArr = [this.root];
    let ancArrs = [];

    // create ancestor array for each path
    function findAnc(node, currArr){
      // if target nodes, save arrays
      if(node === node1 || node === node2){
        ancArrs.push([...currArr, node]);
      }

      if(!node.left && !node.right) {
        return;
      }

      if(node.left) findAnc(node.left, [...currArr, node]);
      if(node.right) findAnc(node.right, [...currArr, node]);
    }

    findAnc(this.root, ancArr);

    // loop saved arrays and find first match from end
    for(let i = ancArrs[0].length - 1; i >= 0; i--){
      for(let j = ancArrs[1].length - 1; j >= 0; j--){
        console.log(ancArrs[0][i].val,ancArrs[1][j].val)
        if(ancArrs[0][i].val === ancArrs[1][j].val){
          return ancArrs[0][i];
        }
      }
    }
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
