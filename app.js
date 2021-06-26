// app.js
const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

// Ignore favicon
app.use(function (req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    return res.status(204)
  }
  next()
})

// Get server log
app.use(function (req, res, next) {
  // log request time
  const reqMoment = moment()
  const reqTime = reqMoment.format('YYYY-MM-DD HH:m:s')
  const requestLog = `${reqTime} | ${req.method} from ${req.originalUrl}`
  console.log(requestLog)

  // log response time
  res.on('finish', () => {
    const resMsTime = moment().valueOf()
    const timeGap = resMsTime - reqMoment.valueOf()
    const responseLog = `${requestLog} | total time: ${timeGap}ms`
    console.log(responseLog)
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
