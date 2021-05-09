//https://gist.github.com/axelpale/3118596
let {log} = console

const k_combinations = (set, k) => (
  k > set.length || k <= 0 ? []
  : k == set.length ? [set]
  : k == 1 ? set.reduce((acc, cur) => [...acc, [cur]], [])
  : ((set)=>{let combs = [], tail_combs = [];for (let i = 0; i <= set.length - k + 1; i++) {
      tail_combs = k_combinations(set.slice(i + 1), k - 1)
      for (let j = 0; j < tail_combs.length; j++) {
        combs.push([set[i], ...tail_combs[j]])
      }
    };
    return combs})(set))

const combinations = set => set.reduce((acc, cur, idx) =>  [...acc, ...k_combinations(set, idx + 1)], [])
log(combinations(["하나","둘","셋","아아앙"]))