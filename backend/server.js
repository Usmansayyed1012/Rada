const express = require('express');
const mysql = require('mysql2');
const app = express();
const db = mysql.createConnection({
  host: 'ciacloud,in',
  user: 'tpuser',
  password: '%TGBbgt5',
  database: 'tpdb'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ MySQL Connected...');
});

module.exports = db;

app.get('/todolist', (req, res) => {
    res.send('Hello World!')
})

const port = 3000   
app.listen(port, () => console.log(`Example app listening on port ${port}!`))