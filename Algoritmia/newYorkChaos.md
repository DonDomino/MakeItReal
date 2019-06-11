# Newyork Chaos
```javascript
function bubble(arr){
var total=0;
 for(let i=0;i<arr.length-1;i++){
   var count = 0;
  for(let j=i+1;j<arr.length;j++){
  if(arr[i]>arr[j]){
    if(count <2 ){
       count++;
       total++;   
    }
    else{
      return -1;
    }
  }
  
  }
 }
return total;
}
```