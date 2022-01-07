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
    ssl: { rejectUnauthorized: false },
    password: process.env.PWD_D,
    server: process.env.NAME_D,
    options: {
      trustServerCertificate: true,
    },
    database: "liberty",
  }

  sql.connect(config, function (err) {
    if (err) {
      console.log(err)
    }
    var request = new sql.Request()
    request.query(
      `select * from Persons LEFT JOIN (Select TOP 1 * from Donation order by amount) as d ON d.person_id = Persons.person_id LEFT JOIN (Select TOP 1 * from PhoneNumber where phone_type = 'home' OR phone_type = 'work' order by phone_type) as n ON Persons.person_id = n.person_id `,
      function (err, set) {
        if (err) {
          console.log(err)
        } else {
          res.send(JSON.stringify(set))
        }
      }
    )
  })
})

app.get("/:person_id", (req, res) => {
  var sql = require("mssql")
  const config = {
    user: "admin",
    ssl: { rejectUnauthorized: false },
    password: process.env.PWD_D,
    server: process.env.NAME_D,
    options: {
      trustServerCertificate: true,
    },
    database: "liberty",
  }

  sql.connect(config, function (err) {
    if (err) {
      console.log(err)
    }
    var request = new sql.Request()
    request.query(
      `select * from Persons where person_id = ${req.params.person_id} select * from PhoneNumber where PhoneNumber.person_id = ${req.params.person_id} select * from Address where Address.person_id = ${req.params.person_id} select * from Donation where Donation.person_id = ${req.params.person_id}`,
      function (err, set) {
        if (err) {
          console.log(err)
        } else {
          res.send(JSON.stringify(set))
        }
      }
    )
  })
})

app.listen(PORT, () => {
  console.log(`Smokey's got his ears up on port ${PORT}`)
})
