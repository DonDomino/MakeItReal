#Ejercicio Binary search
```javascript
function binarySearch(arr,elem){
	return binaryRecursive(arr,elem,0,arr.length);
  
  function binaryRecursive(arr,elem,pi,pf){
  	if(pi>pf){
    	return -1
    }    
    let mitad = pf-pi/2
    	if(mitad === elem){
    		return mitad
    }
    if(mitad<elem){
      	return binaryRecursive(arr, elem, mitad+1, pf)
    }
    if(mitad>elem){
    	return binaryRecursive(arr, elem, pi, mitad-1)
    }    
  }
}
```