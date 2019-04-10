/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    if(!this.root) return sum;
    let stack = [this.root];
    
    while(stack.length) {
      let curr = stack.pop();
      
      sum += curr.val;

      for(let children of curr.children){
        stack.push(children);
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    if(!this.root) return count;
    let stack = [this.root];

    while(stack.length) {
      let curr = stack.pop();

      if(curr.val % 2 === 0) {
        count++;
      }

      for(let children of curr.children){
        stack.push(children);
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    if(!this.root) return count;
    let stack = [this.root];

    while(stack.length) {
      let curr = stack.pop();

      if(curr.val > lowerBound) {
        count++;
      }

      for(let children of curr.children){
        stack.push(children);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
