let {log } = console
let sol1 = $1 => $1.forEach(v=>$1[v]=($1[v]? $1[v] : 0  )+1)
let sol2 = $1 => {$1.forEach(v=>$1[v]=($1[v]|0)+1);return $1}
let sol4 = ($1,$y={}) => [$y].map(v => v,$1.forEach(v=>$y[v]=($y[v]|0)+1))

let a =["a1","a2","a3","a1"]
log(sol4(a)[0])


let sol5 = _ => _

/*
종류 가짓수

배열
|> { 원소: 갯수 ...}
|> [1..총 원소수].map(num=>전체집합.map(단위=>단위.원소수 c num ))
|> 

[
  {a1:3},
  {a2:2},
  {a3,4},
]




종류 가짓수
*/