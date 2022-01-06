const express = require('express')
const app = express()
var cors = require("cors")
const sql = require('mssql')
const PORT = process.env.PORT || 3000;

const config = {
  user: 'admin',
  password: process.env.NAME,
  server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
  database: process.env.PWD,
}

app.get('/', (req, res) => {
  async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
        const result = await sql.query`select * from Persons`
        res.send('Great shit!')
    } catch (err) {
        // ... error checks
    }
}
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});