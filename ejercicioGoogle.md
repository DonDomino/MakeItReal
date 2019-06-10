```javascript
function suma(arr, sum) {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    if(obj[arr[i]]){
      return true;
    } else {
      obj[sum - arr[i]] = true;
    }   
  }
  return false;
}