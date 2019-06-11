# Recursion
```javascript
function factorial(x){ 
  if (x === 0){
    return 1;
 }
  return x * factorial(x-1);       
}
```
///
```javascript
function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}
```
///
```javascript
function flatten(items){
  const flat = [];
  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });
  return flat;
}
```
///
```javascript
function collatz(n){
    if (n == 1)
        return 0;
    else if ( n % 2 == 0)
        return 1 + collatz(n / 2);
    else
        return 1 + collatz(3 * n + 1);
}
```
///
```javascript
function pascaltriangle(row, col){
  if((row == 0) || (col == row)) return 1;
  return pascaltriangle(row - 1, col - 1) + pascaltriangle(row, col - 1);
}

function pascal(num) {
  let step = '';
  for(let col = 0; col < num; col++){
    for(let row = 0; row < col + 1; row++) {
      step += pascaltriangle(row, col) + " ";
    }
    step += "\n";
  }
  return step;
}
```