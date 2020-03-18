require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')
const path = require('path')
const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use(routes)

// Static Content
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log('Server listening.....')
})