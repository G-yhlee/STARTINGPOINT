
#### Unknown Visitor DataTable :: [client_id]_uvdb
<table>
<tr>
<td>KEY</td>
<td>DATA TYPE</td>
<td>DESCRIPTION</td>
</tr>
<tr>
<td>idx</td>
<td>INT</td>
<td>The index of face image within corresponding subset of database (masked or unmasked subset), based on ascending order of timestamp. Start from 0.</td>
</tr>
<tr>
<td>visitor_id</td>
<td>VARCHAR(50)</td>
<td>Unknown visitor id. "M" stands for masked-face and "N" stands for no masked-face</td>
</tr>
<tr>
<td>img_str</td>
<td>TEXT</td>
<td>Face image (160x160) which is encode to string using Base64Encoding.</td>
</tr>
<tr>
<td>centroid</td>
<td>TEXT</td>
<td>The 512D embedding feature of face image. Store as text with SPACE is the delimited symbol</td>
</tr>
<tr>
<td>timestamp</td>
<td>VARCHAR(50)</td>
<td>The timestamp of each face image in format "YYYYMMDD-HHMMSS"</td>
</tr>
</table>

#### Unknown Visitor DataTable :: [client_id]_summary
<table>
<tr>
<td>KEY</td>
<td>DATA TYPE</td>
<td>DESCRIPTION</td>
</tr>
<tr>
<td>visitor_id</td>
<td>string</td>
<td>Unknown visitor id. "M" stands for masked-face and "N" stands for no masked-face</td>
</tr>
<tr>
<td>sample_image</td>
<td>TEXT</td>
<td>Sample face with size = 160 x 160, which is encoded to string using base64 encoding method</td>
</tr>
<tr>
<td>centroid</td>
<td>list of string</td>
<td>The centroid of 512D embedding features with same visitor_id in [client_id]_uvdb table. Store as text with SPACE is the delimited symbol</td>
</tr>
</table>

#### Known Visitor DataTable Information - [client_id]_kv_manual
<table>
<tr>
<td>visitor_id</td>
<td>VARCHAR(50)</td>
<td>Known visitor id.</td>
</tr>
<tr>
<td>img_str</td>
<td>TEXT</td>
<td>Face image (160x160) which is encode to string using Base64Encoding.</td>
</tr>
</table>
