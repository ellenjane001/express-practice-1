var express = require("express")

var router = express.Router()

router.get('/', (req, res) => {
    res.send('get request for products')
})

router.get('/get-product-details', (req, res) => {
    res.send('get products')
})

module.exports = router;