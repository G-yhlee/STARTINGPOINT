/*
https://youtu.be/RYxgNZW3wl0

프로토타입 경우의수
1. 
newObj = new oldObj
newObj.__proto__ = oldObj

2.
프로토스.prototype = 고대종족
고대종족.constructor = 프로토스

3. 

*/
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




