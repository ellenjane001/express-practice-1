var express = require("express")
var products = require('./routes/products')
var users = require('./routes/users')
var orders = require('./routes/orders')
var items = require('./routes/items')
var reviews = require('./routes/reviews')
var app = express()

app.use('/products', products)
app.use('/users', users)
app.use('/orders', orders)
app.use('/items', items)
app.use('/reviews', reviews)

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get('/test', (req, res) => {
    var testObj = {
        id: 1
        , test: 'test'
    }
    res.send(testObj)
})

app.listen(4000)