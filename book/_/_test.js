let {log} = console
function Counter() {
  this.sum = 0
  this.count = 0
}

// 화살표 함수 쓰면 다르게 동작함
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