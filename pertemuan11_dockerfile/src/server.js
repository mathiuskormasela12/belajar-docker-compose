const path = require('path')
const dotenv = require('dotenv')
const express = require('express')

dotenv.config({ path: './.env' })

const { PORT = 3000 } = process.env

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views', path.join(__dirname, './templates'))
app.set('view engine', 'hbs')

app.get('/home', (req, res) => {
  const name = req.query?.name ?? '-'

  res.render('home', {
    name
  })
})

app.listen(PORT, () => {
  console.log(`Magic happens at ${PORT}`)
})
