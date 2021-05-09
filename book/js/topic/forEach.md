```js
let arr1 = ["a1","a2","a3"]
let sol = ($1,$2) => $1.find(_=> !$2[_]-- ,$2.forEach(_=>$2[_]=$2[_]|0+1))
let sol2 = ($1) => $1.forEach
```