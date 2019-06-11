```javascript
var numJewelsInStones = function(J, S) {
    let count = 0    
    for (let i = 0; i < S.length; i++){
        if (J.indexOf(S[i]) >= 0){
            count++
        }
    }
    return count
};

var twoSum = function(nums, target) {
    arr = []
    for(let i =0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target && i != j){
                arr.push(i)
                arr.push(j)
            }
        }
    }
    return arr
};

var isAnagram = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    if(s.length !== t.length){
        return false
    }
    for(let i=0;i<s.length;i++){
        if(s[i] !== t[i]){
            return false
        }
    }
    return true
};

