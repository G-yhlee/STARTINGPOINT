## 일렉트론-시작하기
```erlang
Manual Guide of 일렉트론-시작하기

Command 1 : 깃-시작하기
Command 2 : 일렉트론-시작하기
npm init -y
npm i --save--dev electron electron-reload

INFO: 


```


## 옵션 :: 일렉트론 - 리액트 시작하기
```erlang
Manual Guide of 일렉트론 - 리액트 시작하기

Command 1 : 깃-시작하기
Command 2 : 일렉트론-시작하기
Command 3 : 리액트-시작하기

INFO: 

```


## 기본세팅 :: 기본 파일 만들기
```erlang
Manual Guide of 기본 파일 만들기


INFO: 파일 구조 한눈에 보기

| electronApp 
- index.html
- main.js
- preload.js
- .gitignore 
- package.json
- webpack.common.js

+ src
- app.js
- index.js

INFO: 폴더 구조 및 파일 설명

# 일렉트론 앱
- idex.html : app.js 가 동작하여, app 화면을 그림
- main.js : 일렉트론 프로세스 동작을 관리함
- preload.js : 없어도되는 파일, main.js 파일에서 파생된 기능을 관리


# 설정 파일
- .gitignore : git에 등록되지 않는 파일 설정
- package.json : npm 설정 .. 중요기능만 직접 설정, 나머진 자동 관리
- webpack.common.js: webpack 설정 .. 중요기능 직접 설정해야한다.

# 리액트 파일 ( 옵션 )
- src/app.js : 앱의 전체 돔을 최종 관리
- src/index.js : 최종 렌더링함


```

---
# ELECTRON APP 만들기
    일렉트론 앱을 만들기 위해, 
    
    index.html , main.js, preload.js, package.json 파일을 생성한다.
    준비가 끝나면, npm start 를 실행하자
     
## index.html
```js
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
</head>
<body style="background: white;">
    <div id="app"></div>
</body>
<script src="./build/js/app.js"></script> 
</html>

```

## main.js
```js
// main.js
const { app, BrowserWindow, ipcMain ,Notification} = require('electron')
const path = require('path')
const isDev = !app.isPackaged;

// 리로드
if (isDev){
  require('electron-reload')(__dirname,{
    electron: path.join(__dirname,'node_modules','.bin','electron')
  })
}

// 메세지 리스너
ipcMain.on('type1', (_,msg)=> {
  new Notification({title: 'title1',body: msg }).show();
 })
 
ipcMain.on('app-quit', ()=> {
  app.quit()    
})


 // 렌더러
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
    }
  })
  win.loadFile('index.html')
  win.webContents.openDevTools();
}


// 앱 조작
app.whenReady().then(() => {
  createWindow()


})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

```



## preload.js
```js
// 옵션파일이다. 없어도 되는 파일임..
const {ipcRenderer, contextBridge} = require('electron');

window.on_noti = (msg) => {
    ipcRenderer.send('type1',msg);
}

```


## package.json
```js
// main , scripts 만 직접 수정하고, 나머지는 npm 패키지 매니저에게 맡긴다.
// npm start , npm run watch 등의 명령을 통해 앱을 구동할수 있다.

{
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "watch": "webpack --config webpack.common.js --watch"
  }
}

```



---

## 체크포인트
```js



```


---

## src/app.js
```js

```
## src/index.js
```js

```
