function*gen() {
  // 이거 효과가 뭘까? 이렇게 하면 좋은점??
  yield 1;
  yield 2;
  yield 3;
}

let gentor1 = gen()
let gentor2 = gen()

log(
  [gentor1.next().value,gentor1.next().value,gentor1.next().value],
  [...gentor2],
)
