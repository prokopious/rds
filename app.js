const express = require('express')
const app = express()
var cors = require("cors")
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});