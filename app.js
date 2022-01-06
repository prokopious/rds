const express = require("express")
const app = express()
var cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 1433
app.use(cors())
app.get("/", async (req, res) => {
  var sql = require("mssql");
  const config = {
    user: "admin",
    password: process.env.PWD_D,
    server: process.env.NAME_D,
    synchronize: true,
   extra: { 
    trustServerCertificate: false,
    Encrypt: true,
    IntegratedSecurity: true,
    
    
    },
    database: "liberty"
  }

  sql.connect(config, function (err) {
    
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();
       
    // query to the database and get the records
    request.query('select * from Persons', function (err, recordset) {
        
        if (err) console.log(err)

        // send records as a response
        res.send("shit");
        
    });
});
})

app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});
