## async await 퀴즈
```js

// api1 과 api2 는 다르게 동작한다 이유는?
async function api1 (url) { 
  await fetch(url)
  .then(response=>{
    log(response);
    return {text: response.text()}
  })
  .then( ({text})  => {return log(text)} ) 
} 

async function api2 (url) { 
  await fetch(url)
  .then(response=>{
    log(response);
    return response.text()
  })
  .then( text  => log(text) ) 
}

```

## async await 해결방법
```js

// api1 과 api2 는 다르게 동작한다 이유는?
async function api1 (url) { 
  await fetch(url)
  .then( async response=>{
    log(response);
    return {text: await response.text()}
  })
  .then( ({text})  => {return log(text)} ) 
} 

async function api2 (url) { 
  await fetch(url)
  .then(response=>{
    log(response);
    return response.text()
  })
  .then( text  => log(text) ) 
}

```