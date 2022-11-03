var express = require('express')
var router = express.Router()
// regular expressions - digits - dynamic routes -  pattern matching
router.get('/search/:key([0-9]{4})', (req, res) => {
    res.send('data capture is ' + req.params.key)
})
// regular expression - alphabets - dynamic routes -  pattern matching
router.get('/search-username/:key([a-z-Z]{5})', (req, res) => {
    res.send('data capture is ' + req.params.key)
})

module.exports = router