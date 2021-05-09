let {log} = console
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

const reduce = (f,acc,iter) => {
  if(!iter){
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }
  for(const a of iter){
    acc=f(acc,a)
  }
  return acc
}
const reduce2 = (f,acc,$) => {
  $.forEach(_=>acc = f(acc,_))
  return acc
}
const reduce31 = (f,acc,$) => acc.map(a=>a,$.forEach(_=>acc.push(f(acc.pop(),_))))[0]
const reduce32 = (f,acc,$) => acc.map(a=>a,$.forEach(_=>acc.push(f(acc.pop(),_))))[0]


const add = (a,b) => a+b
log(reduce(add,0,[1,2,3])) //== add(add(add(0,1),2),3)
log(reduce(add,[1,2,3])) //== add(add(add(0,1),2),3)
log(reduce2(add,0,[1,2,3,5])) //== add(add(add(0,1),2),3)
log(reduce32(add,[0],[1,2,3,5])) //== add(add(add(0,1),2),3)


