
let {log} = console
let set = [1,2,3]
let sub_set = [1,2]

let arr = [1,2,2,3,3,4] // 동명이인 존재
let sub_arr = [1,2,2,3,3] // 동명이인 존재 누군가 낙오
let sub_arr_set = [1,2,2,3,4] // 동명이인 낙오

let solution = (p, c) => {
  let p_string = p.toString()
  let k  = c.map(c=>p)
  return p
}

log(solution(set,sub_set));
log(solution(arr,sub_arr));
log(solution(arr,sub_arr_set));


log([1,2,3,3,4,5].filter((v,i,a)=> i===a.indexOf(v) ))
"finde indexOf i from 0".indexOf("i",0) == 1
"finde indexOf i from 10".indexOf("i",10)== 14
"finde indexOf i from 15".indexOf("i",15)== 15