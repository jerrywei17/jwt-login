const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router')
const mongoose = require('mongoose')
const config = require('./config')
const cors = require('cors')

//DB setup
mongoose.connect(config.mongoURI)

const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({type: '*/*'}))
router(app)

const port = process.env.PORT || 5000
const server = http.createServer(app)

server.listen(port)
console.log('Server listening on:', port)
