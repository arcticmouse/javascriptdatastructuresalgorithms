//find distance bt two nodes in a graph
//breadth first & depth first

//starts at 1 node, then visits neighbors. finds distance between 2 nodes.
//pass in graphs, and node index
function bfs(graph, root) {
    var nodesLen = {}; //stores distance to root node
    
    for (var i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity; //all distances start at infinity aka not reachable from start node
    }
    nodesLen[root] = 0; //root is 0
    
    var queue = [root]; //keep track of nodes to visit
    var current; //current node
  
    while (queue.length != 0) { //traverse until no more nodes to traverse
      current = queue.shift(); //pop off a node to traverse. begins w root node
      
      var curConnected = graph[current]; 
      var neighborIdx = []; 
      var idx = curConnected.indexOf(1); 
      while (idx != -1) {
        neighborIdx.push(idx); //push ot index of neighbors
        idx = curConnected.indexOf(1, idx + 1); //search for next connected node after prev one that is found 
      }
      //we have all neighboring nodes, lets find their distance
      for (var j = 0; j < neighborIdx.length; j++) { //then loop through connected nodes and get distance
        if (nodesLen[neighborIdx[j]] == Infinity) { //distance of node not yet set
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1; //set distance to value of nodes length array + 1
          queue.push(neighborIdx[j]); //push neighbor to queue so next pass through while loop it's neighbors also get checked
        }
      }
    }
    return nodesLen; //key value pairs, key: node, val: distance from root
  };
  
  var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];
  console.log(bfs(exBFSGraph, 1)); //graph and first node
  /*
  { '0': 2, '1': 0, '2': 1, '3': 3, '4': Infinity }
  */