```javascript
function solve(boardStr) {
  var board = parseBoard(boardStr);
  return solveRec(board);
}

function solveRec(board) {
// buscar la posición en blanco
  var pos = searchBlank(board);
  if (!pos) return true;  
// obtener todas las posibilidades para pos
  var opts = searchPossibilities(board, pos[0], pos[1]);
  if (opts.length === 0) return false;  
  opts.forEach(function(opt) {
// clonar el board
    var boardClone = cloneBoard(board);
// asignar la opción al board
    boardClone[pos[0]][pos[1]] = opt;    
    var result = solveRec(boardClone);
    if (result) return true;
  });  
  return false;
}

function parseBoard(str) {
  var board = [];
  for (var i=0; i < 9; i++) {
    board[i] = [];
    var pos = i*9; // 0
    for (var j=0; j < 9; j++) {
      var val = str[pos + j];
      board[i][j] = val === "." ? "" : parseInt(val);
    }
  }  
  return board;
}

function searchBlank(board) {
  for (var row=0; row < 9; row++) {
    for (var col=0; col < 9; col++) {
      if (board[row][col] === "") {
        return [row, col];
      }
    }
  }  
  return null;
}

function searchPossibilities(board, row, col) {
  var opts = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
  // check row
  for (var c=0; c < 9; c++) {
    var val = board[row][c];
    if (val !== "") {
      var index = opts.indexOf(val);
      if (index !== -1) opts.splice(index, 1);
    }
}  
  // check col
  for (var r=0; r < 9; r++) {
    var val = board[r][col];
    if (val !== "") {
      var index = opts.indexOf(val);
      if (index !== -1) opts.splice(index, 1);
    }
}  
// check quadrant
  var qr = 0;
  if (row > 2) qr = 3;
  if (row > 5) qr = 6;
  
  var qc = 0;
  if (col > 2) qc = 3;
  if (col > 5) qc = 6;
  
  for (var r=qr; r < qr + 3; r++) {
    for (var c=qc; c < qc + 3; c++) {
      var val = board[r][c];
      if (val !== "") {
        var index = opts.indexOf(val);
        if (index !== -1) opts.splice(index, 1);
      }
    }
  }  
  return opts;
}

function cloneBoard(board) {
  return board.map(function(arr) {
    return arr.slice();
  });
}