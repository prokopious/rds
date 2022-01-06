const express = require("express")
const app = express()
var cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 3000
app.use(cors())
app.get("/", (req, res) => {
  var sql = require("mssql")
  const config = {
    user: "admin",
    password: process.env.PWD_D,
    server: process.env.NAME_D,
    database: "liberty"
  }

  sql.connect(config, function (err) {
    if (err) {
      console.log("shitty1")
      console.log(err)
    }
    // create Request object
    var request = new sql.Request()

    // query to the database and get the records
    request.query("select * from Persons", function (err, recordset) {
      if (err) {
        console.log("shitty2")
        console.log(err)
      } else {
        console.log(recor)
        res.send("shit")
      }
    })
  })
})

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`)
})
