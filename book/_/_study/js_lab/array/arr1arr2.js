let sol1 = (arr1,arr2) =>{}
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))


/*

let sol = (arr1,arr2) => return arr1-arr2
[v] => [e1,e2,e3...] 
, [e1,e2,e3,e4] => [e1:x,e2:num...]

arr2.map(v=>arr2[v]=v)



return arr1 - arr2 



*/


/* 
1차 :: [e1,e2,e3,e4] => [e1:x,e2:num...]

- let arr2obj = (arr) => 
arr.map(a=>arr[a]=((arr[a]|0)+1))

*/