# Ejercicios de ordenamiento
```javascript
function insertionSort(array) {  
  for(var i = 1; i < array.length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }  
  return array;
}
```
//
```javascript
function selectionSort(array) {
    var temp;
    for(var i=0; i<array.length; i++){
        var ni = i;        
        for(var j = i + 1; j<array.length; j++) {
            if(array[j] < array[ni]){
                ni = j;
            }
        }
        temp = array[i];
        array[i] = array[ni];
        array[ni] = temp;
    }
    return array
};
```
//
```javascript
function bubbleSort(arr){
 for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
        let aux=arr[i]
        arr[i]=arr[j]
        arr[j]=aux
    }
  }
 }
return arr
}

```