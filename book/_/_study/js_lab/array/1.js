let {log} = console
//indexOf(searchElement, fromIndex)

// arr -> set
var arr = [1,2,3,3,4,5]
arr.filter((v,i,a)=> i===a.indexOf(v) )
// arr -> num
"find indexOf i from 0".indexOf("i",0) == 1
"find indexOf i from 10".indexOf("i",10)== 14
"find indexOf i from 15".indexOf("i",15)== -1

////////////////

//splice(start, deleteCount, item1, item2, itemN)
var arr = [1,2,3,4,5]

// log(arr_2,[...arr_2].splice(1)) // 값 보존
// log(arr,arr.splice(1)) // 값 보존 안됌
// log(arr,arr.splice(1,1)) // 값 보존 안됌
// log(arr_2,arr_2.splice(1,3,"1","2","3")) // 값 보존 안됌



// arr - arr
var arr1 = [1,2,3,4,5]
var arr2 = [1,2,3,4]

function solution (p, c) {
  c.map( a=> p.splice(p.indexOf(a),1,''))
  return p.filter(a=>a!='')[0]
      
  }
  


// arr1

var arr = ["mislav", "stanko", "mislav", "ana"]
var arr_str = arr.toString()

var arr2 = ["stanko", "ana", "mislav"]
// log( arr2.map( a=> arr.toString().replace(a,"")    ))
log(arr_str.replace("leo","neo") ,arr )

function solution (participant, completion) {
  let p = participant.toString()
  let c = completion
for (let a of c) {
  p = p.replace(a,"")
  p = p.replace(",","")
}
return p
}
function solution (participant, completion) {
  let p = participant
  let c = completion
  
  let str = ''
  for (let a of p) {
       str = str+a
  }
    for (let a of c) {
      str = str.replace(a,"")
    }
return str
}
function solution (participant, completion) {
  let p = participant
  let c = completion
  
  let str = ''
  for (let a of p) {
       str = str+a
  }
    for (let a of c) {
      str = str.replace(a,"")
    }
return str
}
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
var solution=(ps,cs)=>
ps.find(p=>!cs[p]--,cs.map(c=>cs[c]=(cs[c]|0)+1))

log(12,solution(arr,arr2))