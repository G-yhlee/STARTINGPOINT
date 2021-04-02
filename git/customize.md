## 깃 명령어 커스터 마이징
```erlang
Manual Guide of 깃 명령어 커스터 마이징

INFO: 
.bashrc 파일에 깃 명령을 커스터 마이징 하여 저장할수 있다
아래는 깃명령을 함수로 커스터마이징한 예시이다. 
```

## 깃 프로젝트 시작 :: g0
```erlang
Manual Guide of 깃 프로젝트 시작 :: g0

Command : g0 app1

Function: 
function g0 {
    mkdir $1 && cd $1
    touch readme.md .gitignore && echo "node_modules" >> .gitignore
    git init 
    git add .
    git commit -m "i"
    code .
} # 깃 프로젝트 시작

INFO: 
app1 이름을 가진 프로젝트가 시작된다.

```

## 깃 커밋하고 푸쉬하기 :: g1 
```erlang
Manual Guide of 깃 커밋하고 푸쉬하기 :: g1 

Command : g1 "commit 메세지"

Function: 
function g1 {
    git add .
    echo "---commit msg: $1---"
    git commit -m $1
    echo ' '

    echo "---push to main---"
    git push -u origin main
} 


INFO: 
커밋메세지를 받아 커밋과 푸쉬 명령을 수행한다.
깃허브에 연결되어 있지 않은경우, 푸쉬명령을 수행되지 않는다...

```

## 깃 현재 상태 보기 :: g2 
```erlang
Manual Guide of 깃 현재 상태 보기 :: g2 

Command : g2


Function: 
function g2 {
    echo '---status---'
    git status -s
    echo ' '

    echo "---LOG---"
    git log --all --decorate --oneline --graph -n 5
} 

INFO: 
깃 현재상태와 로그를 볼수있다.

```