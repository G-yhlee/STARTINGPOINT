## 다음 코드를 간단히
```js
const dom1 = document.getElementById("dom1")
const dom2 = document.getElementById("dom2") 
const dom3 = document.getElementById("dom3")

// == createDom(["dom1","dom2","dom3"])

```

## 추상화 아이디어
```js
const k1 = "v1"
const k2 = "v2" 
const k3 = "v3"

// == const {k1,k2,k3} = {k1: "v1",k2: "v2",k3: "v3" }
// 
```


## 참고
```js
const dom  = {dom1: "dom..1", dom2: "dom...2", dom3: "dom...3"}
```



## 목표
```js
const list = ["dom1","dom2","dom3"] 
const dom = createDom(list)



```






## 추상화
```js
const {k1,k2,k3} = {k1: "v1",k2: "v2",k3: "v3" }
```

```js

const 

const makeDom = id =>  document.getElementById(id)





// const domList = ["wrap","dom2","sideMenu","header"]
//     const zip = (xs,ys) =>
//     domList.map(makeDom)

//     var columns = ["Date", "Number", "Size", "Location", "Age"];
//     var rows = ["2001", "5", "Big", "Sydney", "25"];
//     var result =  rows.reduce((result, field, index)=> {
//       result[columns[index]] = field;
//       return result;
//     }, {})


```