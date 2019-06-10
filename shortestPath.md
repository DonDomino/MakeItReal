```javascript
function Node(name, refs) {
  this.name = name;
  this.refs = refs || [];
}

function shortestPath(mat, s, d) {
// creamos los nodos
  var nodes = [];
  for (var i=0; i < mat.length; i++) {
    nodes[i] = new Node(i + "");
  }
// creamos las conexiones
  for (var r=0; r < mat.length; r++) {
    for (var c=0; c < mat[r].length; c++) {
      var weight = mat[r][c];
      if (weight > 0) {
// crear conexión entre los nodos en la posición r y c
        var node = nodes[c];
        nodes[r].refs.push([node, weight]);
      }
    }
  }
  return shortestPathRec(nodes[s], nodes[d]);
}

function shortestPathRec(s, d) {
  if (s === d) return 0;
  var costs = [];
  s.refs.forEach(function(ref) {
    var cost = shortestPathRec(ref[0], d);
    if (cost !== -1) {
      costs.push(val + ref[1]);
    }
  });
  return costs.length === 0 ? -1 : Math.min(...costs);
}
