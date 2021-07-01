const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// routers go here
const priceRouter = require('../scraper/scraper-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// server.use with endpoints here
server.use('/api/data', priceRouter)

server.get('/', (req, res) => {
    res.status(200).json({api: 'up'})
})

module.exports = server