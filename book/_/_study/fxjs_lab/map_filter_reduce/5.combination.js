//https://gist.github.com/axelpale/3118596
let {log} = console

const k_combinations = (set, k) => (
  k > set.length || k <= 0 ? [] // 예외 처리
  : k == set.length ? [set]
  // : k == 1 ? [set.reduce((acc, cur) => [...acc, [cur]], [])]
  : k == 1 ? ["a"]
  // : k == 1 ? [[...set].map(a=>[a])]
  : ((set)=>{let combs = [], tail_combs = [];for (let i = 0; i <= set.length - k + 1; i++) {
      tail_combs = k_combinations(set.slice(i + 1), k - 1)
      for (let j = 0; j < tail_combs.length; j++) {
        combs.push([set[i], ...tail_combs[j]])
      }
    };
    return combs})(set))


// let k_combinations2 = (set,num) => {
//   f([a1,a2,a3],1) = [a1,a2,a3]
//   f([a1,a2,a3],2) = [[a1,a2],[a1,a3],[a2,a3]]
//   f([a1,a2,a3],length) = [[a1,a2,a3]]
  
//   let f = num == 1 ? [set] :

// }    
// 이전값이 현재 값에 영향을 줌 + 순회 :: 리듀스 or foreach+push
const combinations = set => set.reduce((acc, cur, idx) =>  [...acc, ...k_combinations(set, idx + 1)], [])
const combinations2 = set => {
  let r = []
  set.forEach((v,i,a)=>r.push(...k_combinations(set,i+1)))
  return r
}
log(combinations(["하나","둘","셋","아아앙"]))
log(combinations2(["하나","둘","셋","아아앙"]))

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
