## 복합 개념
```js
let {log} = console
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry
    ++this.count
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
log(obj.count,
// 3
obj.sum)
// 16
```