
## connect info
```js
{
    "user": "userName",
    "password": "password123",
    "host": "docker.someName.net"
    "port": 3306,
    "database": "databaseName"
}
```

## Nodejs example
```js
import mariadb from 'mariadb';
const pool = mariadb.createPool({
  "user": 'userName',
  "password": 'password123',
  "host": "docker.someName.net",
  "port": 3306,
  "database": "databaseName",
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

