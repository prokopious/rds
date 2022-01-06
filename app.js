var express = require("express")
var app = express()
const sql = require('mssql')



app.get("/", function (req, res) {


  // config for your database
  var config = {
    user: "admin",
    password: "Khazarkhan1!",
    server: "localhost",
    database:
      "database-1.cz8tqqetywxp.us-east-1.rds.amazonaws.com",
  }

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err)

    // create Request object
    var request = new sql.Request()

    // query to the database and get the records
    request.query("select * from Persons", function (err, recordset) {
      if (err) res.send(err)

      // send records as a response
      res.send("shit")
    })
  })
})


