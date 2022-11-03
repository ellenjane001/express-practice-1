var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')
var dbURL = require('./properties').DB_URL

mongoose.connect(dbURL)
mongoose.connection.on('connected', () => { console.log('connected to mongoose') })