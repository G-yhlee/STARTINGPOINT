const {log} = console; 
log( "https://www.youtube.com/watch?v=y52Av3JxNW4&t=3s" )
import React , {Component,useState } from 'react';

const $state = { // state 설계 고정값, 참조되지 않음 :: 로그 찍을 때만 참조된다.
  onButton:  {
    S0: {state:"S0",navBar: "off" , menuButton: "off" },
    S1: {state:"S1",navBar: "on" , menuButton: "on" },
  },
}
const onButton = (e) => {
  e.preventDefault();
  // 스테이트 설계
  let {target, stateY: $X , stateF} = e.target.dataset
  let $F = $X == "S0" && stateF == "S0" ? "F_00" 
          : $X == "S0" && stateF == "S1" ? "F_01" 
          : $X == "S1" && stateF == "S0" ? "F_10" 
          : "F_11" 
  ;( // state _cycle
    {
      F_00: ({sy})=> sy.map(a=>a.dataset.stateY ="S0" )  ,
      F_01: ({sy})=> sy.map(a=>a.dataset.stateY ="S1" )  ,
      F_11: ({sy})=> sy.map(a=>a.dataset.stateY ="S1" )  ,
      F_10: ({sy})=> sy.map(a=>a.dataset.stateY ="S0" )  ,
      _: () => log(false)
    }[ $F ]({sy: [...document.querySelectorAll(`[data-target=${target}]`)]})
  );

  let {stateY: $Y} = e.target.dataset
  let {sx,sy} = {sx: $state[target][$X],sy: $state[target][$Y]}
    log(target,$X,$Y,sx,sy)

  ;( // 스토어에 할일 추가 
    {
      F_10: ({sy})=>  {  sy.dataset.storeIdTodo = [...[sy.dataset.storeIdTodo.split(","), sy.value ]] ; log(sy.dataset.storeIdTodo);}, 
      _: () => false
    }[ ["F_10"].includes($F) ? $F : "_" ]({sy: document.querySelector(`[data-store-id-todo]` ) } )
  );

  // 이부분 왜 바깥에서 정의하면 ... 제대로 생성이 안될까..?
  let li = document.createElement("li")
  let f_li = (text) => {
    li.innerText = text
    return li
  }

  ;( // 스토어 데이터 뽑아서 data 업데이트
    {
      F_10: ({sx,sy})=>  {   [...sx.split(",")].map(a=>sy.appendChild(f_li(a)) )}, 
      _: () => false
    }[ ["F_10"].includes($F) ? $F : "_" ]({sy: document.querySelector(`[data-effect-id-list]`),sx:  document.querySelector(`[data-store-id-todo]` ).dataset.storeIdTodo  } )
  );

  ;( // 할일 추가 후 리셋
    {
      F_00: ({sy})=> sy.value = "" ,
      F_10: ({sy})=>  sy.value = "" , 
      _: () => false
    }[ ["F_00","F_10"].includes($F) ? $F : "_" ]({sy: document.querySelector(`[data-state-f="S1"][data-state-y="S0"]` ) } )
  );
}

export default function _(){
 return (
  <>
    <form action="">
      <input 
      type="text" 
      data-target = "onButton" 
      data-state-f="S1" 
      data-state-y="S0"  
      data-store-id-todo="js공부"  
      onChange = {onButton} 
      placeholder={""}/>
      <button   
      data-target = "onButton"  
      data-state-f="S0" 
      data-state-y="S0"  
      onClick = {onButton}>
        할일추가</button>
      <ul
        data-target = "onButton"  
        data-effect-id-list = "list"
      >
       {" 여기에 할일 추가 "}
    </ul>
    </form>
  </>
  )


}