let {log} = console

const curry = (f) => (a,..._) => _.length?  f(a,..._) : (..._) => f(a,..._)

log(curry((a,b)=>a+b)(10)(29))

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
const go = (...ags) => reduce((a,f)=>f(a),ags)
const pipe = (f,...fs) => (...a) => go(f(...a),...fs)

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


go(1,(a)=>a+1, log)