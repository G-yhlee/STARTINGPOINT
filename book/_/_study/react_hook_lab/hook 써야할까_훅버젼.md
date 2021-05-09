```js
const {log} = console; 
log( "https://www.youtube.com/watch?v=y52Av3JxNW4&t=3s" )


import React , {Component,useState } from 'react';
export default function _(){
  const [todos,setTodos] = useState(['js공부','react공부'])
  const [newTodo,setNewTodo] = useState()

  const changeInputData = (e) => {
    setNewTodo(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos,newTodo])
  }
 return (
  <>
    <form action="">
      <input type="text" onChange={changeInputData }/>
      <button onClick={addTodo}  >할일추가</button>
    </form>
    { List({todos}) }
  </>
  )

  function List({todos}) {
    const todoList = todos.map(todo => <li>{todo}</li>)
    return (
      <ul>
        {todoList}
      </ul>
    )
  }
}
```