## json data 테스터
```js
https://jsonplaceholder.typicode.com/


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

```


## json data 보내기 예시
```js
const data = {
  "reqid": "gridonesurveillance",
  "input": {
      "items": [
          {
              "frames":[base64 string],
              "client_id": "new_test_v1",
              "src": "0",
              "edge_filter": "1",
              "eye_dist2min_size_ratio": "0.35",
              "yaw_thresh": [
                  "-28",
                  "28"
              ],
              "pitch_thresh": [
                  "-15",
                  "15"
              ],
              "known_people_conf_thresh": "0.75",
              "unknown_people_conf_thresh": "0.8",
              "visit_cnt_gap": [
                  "0",
                  "0",
                  "15"
              ],
              "clustering_thresh": "0.95"
          }
      ]
  }
};

//POST request with body equal on data in JSON format
fetch(a2o_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(json => console.log('내가 받은 데이터',json))
  
  
```