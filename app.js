const express = require("express")
const app = express()
var cors = require("cors")
const sql = require("mssql")
require("dotenv").config()

const PORT = process.env.PORT
app.use(cors())
app.get("/", async (req, res) => {
  const config = {
    user: "admin",
    password: process.env.PWD_D,
    server: process.env.NAME_D,
    database: "liberty",
    port: process.env.PORT,
  }

  try {
    await sql.connect(config)
    console.log("shit")
    const result = await sql.query`select * from Persons`

    res.send("Great!")
  } catch (err) {
    console.log("this sucks")
  }
})

app.listen(PORT, () => {
  var port = server.address().port;
  console.log(`Our app is running on port ${port}`)
})
