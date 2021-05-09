const custom_Iterable = {
    [Symbol.iterator](){
        let i = 0
        return {
            next(){ 
                return i == 3 ? {done: true } : {value: i++ , done: false}
            },
            [Symbol.iterator](){ return this}
        }
    }
  }
  function*gen() {
    yield 1;
    yield 2;
    yield 3;
  }

  const iterable = [1,2,3]
  const iterator = iterable[Symbol.iterator]()
  const iterator_by_gen = gen()
  const iterator_next = iterator.next()
  const iterator_next_value = iterator_next.value
  
  log(
    [1,2,3], '이터러블: 심볼 이터레이터가 있으면 이터러블이다',
    [1,2,3][Symbol.iterator](), '이터레이터: next 함수가 있으면 이터레이터이다',
    [1,2,3][Symbol.iterator]().next(), '이터레이터 상태 변화',
    [1,2,3][Symbol.iterator]().next().value, '이터레이터 value 상태 출력',
    [1,2,3][Symbol.iterator]().next().done, '이터레이터 done 상태 출력',
    iterator == iterator[Symbol.iterator]() , '웰폼드 이터레이터: 이터레이터가 자기자신을 반환 한다',
  )