class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let adj of vertex.adjacent) {
      adj.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let vals = [];
    let seen = new Set([start]);

    function getVal(node){
      vals.push(node.value);
      for(let adj of node.adjacent){
        if(!seen.has(adj)) {
          seen.add(adj);
          getVal(adj);
        }
      }
    }
    
    getVal(start);

    return vals;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let vals = [];
    let q = [start];
    let seen = new Set([start]);

    while(q.length) {
      let curr = q.shift()
      vals.push(curr.value);

      for(let adj of curr.adjacent){
        if(!seen.has(adj)) {
          seen.add(adj);
          q.push(adj);
        }
      }
    }

    return vals;
  }

  /** 
   * takes in source vector and target vector
   * returns a set of the shortest path from source to target
   */
  shortestPath(source, target){
    let q = [source];
    let seen = new Map();
    let searching = true;

    console.log("STARTS HERE");

    while(searching) {
      let curr = q.shift();
      console.log(curr.value);
      if(curr === target){
        break;
      }

      for(let adj of curr.adjacent){
        seen.set(adj, curr);
        q.push(adj);
        console.log("SEEN", seen);
      }
    }

    let path = new Set([target]);
    let node = seen.get(target);

    while(node !== source) {
      path.add(node);
      node = seen.get(node);
    }

    path.add(source);

    console.log("PATH", path);

    return path;
  }

  // shortestPath(source, target){
  //   let min = Infinity;
  //   let minPath;

  //   function countPath(node, path, count){
  //     // add node to curr path;
  //     path.add(node);
  //     count ++;

  //     // if target found, check if shortest path
  //     if(node === target) {
  //       if(count < min){
  //         // update count and path
  //         min = count;
  //         minPath = new Set(path);
  //         return;
  //       }
  //     }

  //     // check if already in path (prevent looping)
  //     for(let adj of node.adjacent){
  //       if(!path.has(adj)){
  //         // keep going with a copy of curr path
  //         countPath(adj, new Set(path), count);
  //       }
  //     }
  //   }

  //   countPath(source, new Set(), 0);

  //   return minPath;
  // }
}

module.exports = {Graph, Node}