var express = require('express')
var router = express.Router()

router.get('*', (req, res) => {

    var resObj = {
        response: 404,
        responseMsg: 'URL not Found'
    }
    res.send(resObj)
})

module.exports = router
