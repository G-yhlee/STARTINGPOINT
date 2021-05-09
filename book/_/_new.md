## 생성자 new
```js
function DoNew(name) {
  log(this) // {} 생성된다
  this.name = name // 바인딩 된다
  log(this) // {name} 리턴된다
}

let a = new DoNew("홍길동")
```