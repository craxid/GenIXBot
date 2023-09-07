const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(`MIKA MISONO BOT IS ALREADY RUNNING ON PORT 3000

  `)
})
app.listen(3000)