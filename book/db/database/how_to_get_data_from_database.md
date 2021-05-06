
#### Example query
```js
// example
SELECT col1, col2 FROM db WHERE condition1 LIKE condition2 ORDER BY timestamp ASC

// Retrieve with { id } :: Retrieve all masked visitors
SELECT visitor_id, img_str, timestamp FROM new_test_v1_uvdb WHERE visitor_id LIKE '%_M' ORDER BY timestamp ASC

// Retrieve with { timestamp } :: Retrieve visitors data from specific day
SELECT visitor_id, img_str, timestamp FROM new_test_v1_uvdb WHERE timestamp LIKE '20210427-%' ORDER BY timestamp ASC

// Retrieve with { id , timestamp } :: Retrieve specific visitor data from specific day
SELECT img_str, timestamp FROM new_test_v1_uvdb WHERE visitor_id="visitor_000_M" AND timestamp LIKE '20210427-%' ORDER BY timestamp ASC

// Retrieve with { id } |> unique :: Retrieve list of unique masked visitor_id from database
SELECT DISTINCT(visitor_id) FROM new_test_v1_uvdb WHERE visitor_id LIKE '%_M'


// insert { id, img } ::  Manually add known visitor information to table
INSERT INTO new_test_v1_kv_manual (visitor_id,img_str) VALUES ("Pham_Tung_Lam", "Base64EncodedString")


//  :: Create known visitor table
CREATE TABLE IF NOT EXISTS new_test_v1_kv_manual (visitor_id VARCHAR(50),img_str TEXT)

```



























<!-- 
// sudo code ... dont need to read this 
// {visitor_id, img_str, timestamp} = new_test_v1_uvdb.{visitor_id ~ '%_M' }
// {visitor_id, img_str, timestamp} = new_test_v1_uvdb.{timestamp ~ '20210427-%'}
// {visitor_id, img_str, timestamp} = new_test_v1_uvdb.{visitor_id =='visitor_000_M' , timestamp ~ '20210427-%' } -->
