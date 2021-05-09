function*odd11(l) {
  for (let i=0; i <l; i++){
    if ( i % 2) yield i
  }
}
function*odd12(l) {
  let list = []
  for (let i=0; i <l; i++){
     list = i % 2 == 0? list : [...list,i]
  }
  yield * list
}

function*odd13(l) {
  let list = []
  for (let i=0; i <l; i++){
    (
      {
        not_odd : ()=> false ,
        odd: () => list = [...list,i],
      }[i % 2 == 0? "not_odd" : "odd"]()
    )
  }
  yield * list
}



function*infinity(i=0) {
  while (1) yield i++
}

function*odd21(l){
  for( const a of infinity(1) ){
    if (a%2) yield a
    if (a==l) return
  }
}

function *limit(l,iter){
  for( const a of iter ){
    yield a
    if(l == a ) return
  }
}

function*odd22(l){
  for( const a of limit(l,infinity(1)) ){
    if (a%2) {yield a}
  }
}


log(
  [...odd21(10)],
)
