
## connect info
```js
{
  "user": db.user,
  "password": db.password,
  "host": db.host
  "port": db.port,
  "database": db.database
}
```

## db 정보는 노출되지 않도록 처리한다
```js
1. .gitignore 처리하여 깃허브에 노출 하지 않게 처리
2. db정보를 서버에서 직접 불러오지 못하게 db.user 이런식으로 처리한다

```

## Nodejs example
```js
import mariadb from 'mariadb';
// const mariadb = require('mariadb');
const pool = mariadb.createPool({
  "user": db.user,
  "password": db.password,
  "host": db.host
  "port": db.port,
  "database": db.database
  connectionLimit: 5
});

async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const mask = await conn.query("SELECT visitor_id, timestamp FROM new_test_v1_uvdb WHERE visitor_id LIKE '%_M' ORDER BY timestamp ASC");
  log(mask[0])
  } catch (err) {
	throw err;
  } finally {
	if (conn) conn.release(); //release to pool
  }
}

asyncFunction()
```

