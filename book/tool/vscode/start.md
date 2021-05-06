# VSOCDE 단축키 설정
```erlang
Manual Guide of VSOCDE 단축키 설정

참고 : VSCODE JSON 파일로 사용자 지정 단축키 설정 
- https://code.visualstudio.com/docs/getstarted/keybindings


```
---

## user key 바인딩 엘릭서로 표현

```elixir
case ctrl+\
filesExplorerFocus -> focusActiveEditorGroup # 파일패널 -> 에디터 패널
editorFocus  -> focusFilesExplorer # 에디터패널-> 파일패널

case ctrl+shift+\ 
filesExplorerFocus -> openInTerminal # 파일패널 -> 터미널 켜기
terminalFocus || editorFocus -> toggleTerminal # 터미널 OR 에디터 -> 터미널 토글링 

case ctrl+[ 
terminalFocus -> terminal.kill # 터미널 죽이기
case ctrl+] 
terminalFocus && terminalProcessSupported -> terminal.split # 터미널 나누기

case ctrl + shift + c
-> copy line down


case ctrl shigt d
-> line end select




```


# DATA :: User key bindings
```json
// Place your key bindings in this file to override the defaultsauto[]
[
    {
        "key": "ctrl+oem_5",
        "command": "workbench.action.focusNextPart",
        "when": "filesExplorerFocus"
    },
    {
        "key": "f6",
        "command": "-workbench.action.focusNextPart"
    },
    {
        "key": "ctrl+oem_5",
        "command": "-workbench.action.splitEditor"
    },
    {
        "key": "ctrl+shift+oem_5",
        "command": "workbench.action.terminal.toggleTerminal",
        "when": "terminalFocus || editorFocus"
    },
    {
        "key": "ctrl+oem_3",
        "command": "-workbench.action.terminal.toggleTerminal",
        "when": "terminal.active"
    },
    {
        "key": "ctrl+oem_5",
        "command": "workbench.files.action.focusFilesExplorer",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+shift+oem_3",
        "command": "-workbench.action.terminal.new",
        "when": "terminalProcessSupported"
    },
    {
        "key": "ctrl+shift+oem_5",
        "command": "openInTerminal",
        "when": "filesExplorerFocus"
    },
    {
        "key": "ctrl+oem_6",
        "command": "workbench.action.terminal.kill",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+a",
        "command": "explorer.newFile",
        "when": "filesExplorerFocus"
    },
    {
        "key": "ctrl+n",
        "command": "-workbench.action.files.newUntitledFile"
    },
    {
        "key": "ctrl+shift+a",
        "command": "explorer.newFolder",
        "when": "filesExplorerFocus"
    },
    {
        "key": "ctrl+oem_5",
        "command": "workbench.action.terminal.split",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+shift+5",
        "command": "-workbench.action.terminal.split",
        "when": "terminalFocus && terminalProcessSupported"
    }
]
```






















```erlang
** 검색 및 찾기 **
- 일치하는 텍스트 찾기  Ctrl+ F
- 일치하는 텍스트 바꾸기  Ctrl+ R
- 파일 찾기  Ctrl+ P

** 줄 또는 블럭 이동하기 **
- 라인 또는 멀티라인 삭제하기  Ctrl+ Shift+ K
- 라인 위 또는 아래로 이동하기  Alt+ 방향키

** 주석 관련 **
- 한 줄(Line)  주석 토글하기 Ctrl+ /
; 한 줄에도 적용가능하지만 여러 줄에도 사용이 가능합니다. (블록이 아닌 한줄 주석이 여러 줄에 적용됨)
- 멀티라인 주석 토글하기  Shift+ Alt+ A

- 현재 줄 선택하기  Ctrl+ I  또는  Shift+ 방향키


** 탭 관련 **
- 탭 이동하기  Tab
- 탭 반대 방향으로 이동하기  Shift+ Tab
- 현재 탭 닫기 Ctrl+ W 


** 기타 단축키 **
- 들여쓰기(Indent) 이동하기  Ctrl+ [  or  ]

- 선택영역 접기 또는 펼치기  Ctrl+ Shift+ [  or  ]

- 자동 줄바꿈(Word Wrap) 사용하기(토글)  Alt+ Z

- 수정했던 라인으로 바로 이동하기  Alt+ 좌우 방향키
; 수정된 상태는 그대로 두고 라인만 이동할 때 사용합니다

- 좌측 또는 우측 화면으로 포커스(Focus) 하기  Ctrl+ 1  or  2
; 화면을 분할해서 사용하는 경우 매우 유용하며 좌우로 즉시 이동할 수 있습니다

- 선택 라인으로 이동하기  Ctrl+ G
; 100번째 줄로 이동할 경우 100을 입력합니다

- 폰트 사이즈 키우기 / 줄이기(Font size) Ctrl + + or -

- 설정 화면 열기  Ctrl + ,


```
