```javascript
var hasPathSum = function(root, sum) {
    let newSum = sum;
    if(!root) return false;
    
    if(!root.left && !root.right && newSum - root.val === 0){
      return true;
    } else {
      newSum = newSum - root.val;
      return hasPathSum(root.left, newSum) || hasPathSum(root.right, newSum) 
    }    
  };