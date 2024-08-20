// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB

module.exports = {
  db: 'mongodb+srv://serviceit:tFqDPSgpX9zjCutK@servicedb.zztkbj6.mongodb.net/',
  react_app_url: "0.0.0.0:5000"

 
};
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})