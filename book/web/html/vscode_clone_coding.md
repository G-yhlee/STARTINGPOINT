# VSCODE-CLONE-CODING
```erlang
Manual Guide of VSCODE-CLONE-CODING


```



```erlang
Manual Guide of js 부분 얻어갈 내용 요약


INFO1 :: 돔 상태 관리 방법
INFO2 :: event 객체
INFO3 :: event 객체

```



## INFO1 :: 돔 상태 관리 방법
```js
let $ = {
  onMenu: null,
  onFooter: "fix-off",
}

// 이렇게 상태관리 객체를 빼두고 이 상태를 변경하게 한다
// onMenu, onFooter 둘다 토글 형태의 상태


```



## INFO2 :: event 객체
```js
function onMenu(e){
    log(e.target.innerText)
}

/*
- event 객체는 e 로 표현 되기도 한다.
- event 객체에서 접근할수 있는 데이터를 알아두면 활용하기 좋다.
- event 객체에서 모든 attr 에 접근할수 있는것은 아니다.. 어떤 attr 접근가능한지 궁금하면,
구글에 div attribute 이런식으로 검색해서 각 element 마다 어떤 attr이 있는지 부터 확인하자

**/

```


## INFO3 :: state 문 즉시 평가 패턴 && 즉시 실행 함수 패턴 && 객체 선택 패턴 && 삼항 연산 패턴
```js
(
    {
      do_close: () => document.getElementById("onMenu$3_footer").style.left = "50px",
      do_open:  () => document.getElementById("onMenu$3_footer").style.left = "300px", 
    }[document.getElementById("onMenu$3_footer").style.left == "300px" && currentState == beforeState ? "do_close" : "do_open" ]()
  )


/*
- state 문 즉시 평가 패턴 : ( state 문 )
- 즉시 실행 함수: (()=>())()
- 객체 선택 패턴 : {}[]  
- 삼항 연산 패턴: true ? true : false 

총합:: 

(
    {
        key: function(){}
    }[a? x : y ]()
)


**/

```

## INFO4 :: dom 조작 하기 팁
```js
dom.style.width == "250px"


```



## html
```js
const {log} = console; 
import React from 'react';
import Video_index from '../components/video_1/Video_index'

let $ = {
  onMenu: null,
  onFooter: "fix-off",
}

function onMenu(e) {
  let currentState = e.target.innerText
  let beforeState = $.onMenu
  ;(
    {
      do_close: () => document.getElementById("onMenu$1_toggle").style.width = "0px",
      do_open:  () => document.getElementById("onMenu$1_toggle").style.width = "250px", 
    }[document.getElementById("onMenu$1_toggle").style.width == "250px" && currentState == beforeState ? "do_close" : "do_open" ]()
  )

  ;(
    {
      "☰": (e) => document.getElementById("onMenu$2_content").innerText="메뉴에 들어갈 내용...",
      "A": (e) => document.getElementById("onMenu$2_content").innerText="apple is ...",
      "B": (e) => document.getElementById("onMenu$2_content").innerText="banana is ..",
      "C": (e) => document.getElementById("onMenu$2_content").innerText="corn is ....",
    }[e.target.name](e.target.name)
  )

  ;(
    {
      do_close: () => document.getElementById("onMenu$3_footer").style.left = "50px",
      do_open:  () => document.getElementById("onMenu$3_footer").style.left = "300px", 
    }[document.getElementById("onMenu$3_footer").style.left == "300px" && currentState == beforeState ? "do_close" : "do_open" ]()
  )

  $.onMenu = currentState
}

function onFooter(e) {
  document.getElementById("onFooter$1_toggle").style.height = "35%"
  
}

function offFooter(e) {
  (
    {
      "fix-on": (e) => log("고정상태라 움직이지 않음"),
      "fix-off": (e) => document.getElementById("onFooter$1_toggle").style.height = "0px",
    }[ $.onFooter == "fix-off"? "fix-off" : "fix-on" ]()
  );

}

function onFooter_fix(e) {
  ;(
    {
      "fix-on": (e) => {
        $.onFooter = "fix-off";
        e.target.innerText = "○"

      },
      "fix-off":  (e) => {
        $.onFooter = "fix-on";
        e.target.innerText = "⦿"
      }, 
    }[$.onFooter](e)
  )
}

```

```js
export default function _(){
 return (
  <>
<div className="sidenav">
  <a href="#about" onClick={onMenu} name="☰">☰</a>
  <a href="#about" onClick={onMenu} name="A">A</a>
  <a href="#about" onClick={onMenu} name="B">B</a>
  <a href="#about" onClick={onMenu} name="C">C</a>
</div>

<div id="onMenu$1_toggle" className="sidebar">
  <a  id="onMenu$2_content">상세 페이지 </a>
</div>

<div className="main_frame" >
  <Video_index/>
</div>

<div id="onMenu$3_footer" className="footer"onMouseOver={onFooter}    >
    <div id="onFooter$1_toggle"  className="toggle_footer"   >
      <div id= "footer_top"  onMouseOut={offFooter}  >

        <div id="footer_top_left_menu" >
        <a id = "state_footer" >INFO</a>
        <span>ㅤ</span>
          <a id = "state_footer" >STATICS</a>
        </div>
        <div id="footer_top_right_menu" >
          <a id = "state_footer" onClick={onFooter_fix}>○</a>
        </div>

      </div>
      <div id= "footer_middle">
        <a> 상세 페이지 </a>
      </div>
      </div>
    
      <div id= "footer_bottom">  
        <span>Gridone</span>
        <span>ㅤ</span>
        <span>솔루션 개발 본부</span>
        <span>ㅤ</span>
        <span>홍 길 동</span>
      </div>
  </div>
  </>
  )
}
```

```css
.left {
  width: 100px;
  height: 700px;
  background: rgb(218, 221, 230);
  float: left;
  
}
.set {
  float: right;
}
.main {
  width: 1000px;
  height: 600px;
  background-color: rgb(244, 244, 248);
  /* float: left; */

}

.bottom {
  width: 1000px;
  height: 100px;
  background-color: rgba(211, 211, 208, 0.568);
  /* float: left; */

}
.right {
  width: 100px;
  height: 700px;
  background: rgb(151, 169, 219);
  float: right;
}


```