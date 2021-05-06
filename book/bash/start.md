# bash 시작하기
```erlang
Manual Guide of bash 시작하기

function o:save {
echo "${PWD##*/},${PWD}" >> /c/Users/gridone/bash_data.txt
}
function o: {
a=$(cat  /c/Users/gridone/bash_data.txt | grep "$1," | awk -F',' '{print $2}')
code "$a"
}
function o:list {
a=$(cat  /c/Users/gridone/bash_data.txt | grep "$1," | awk -F',' '{print $1}')
echo "$a"
}

function o:listAll {
a=$(cat  /c/Users/gridone/bash_data.txt)
echo "$a"
}

```
