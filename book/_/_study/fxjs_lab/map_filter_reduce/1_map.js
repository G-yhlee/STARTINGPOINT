let {log} = console
let log_ = (a,b) => {b?log(a,b) : log(a);return a}
let $ = [
  {name: '반팔티1', price: 1},
  {name: '반팔티2', price: 2},
  {name: '반팔티3', price: 3},
  {name: '반팔티4', price: 4},
  {name: '반팔티5', price: 4},
  {name: '반팔티6', price: 4},
]

function * gen() {
  yield 1
  yield 2
  yield 3
}

let $2 = gen()
let $3 = gen()
let $4 = gen()
let $5 = gen()

// 커스텀map이 내장 map 함수와 다른점? 
// 1. document.querySelector.map 은 먹히지 않는다. 즉 다형성이 더 좋다
// 2. map함수가 기존 배열을 바꾸지 않는다
// 3. map1,map2,map3 각각 다른점? 기능은 같은데 성능이 map1이 좋은듯..?
let map1 = (f,$) => {
  let a = []
  for (_ of $) { a.push(f(_))}
  return a
}
let map2 = (f,$,_return=[]) => {
  for (v of $) { _return.push(f(v))}
  return _return
}

// let map3 = (f,[...$]) => $.map(a=>a,$.forEach(_=>$.push(f(_)))).slice($.length/2)
let map3 = (f,[...$]) => {$.forEach(_=>$.push(f(_))) ;return $.slice($.length/2)}


log(map1((a)=>a*a,$3))
log(map2((a)=>a*a,$4))
log(map3((a)=>a*a,$5))
log(map1((a)=>a.name,$))
log(map2((a)=>a.price,$))
log(map3((a)=>a.name,$))