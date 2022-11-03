var express = require('express')
const { route } = require('./products')
var router = express.Router()

router.use('/', (req, res, next) => {
    req.headers['content-type'] = 'application/json'
    console.log('API call ended')
    next()
})

router.get('/', (req, res, next) => {
    res.send('headers received' + req.headers['content-type'])
    res.send('hello, you are a users API')
    next()
})





router.get('/read-users', (req, res) => {

    res.send('List of users')
})

router.get('/get-user-details/:id', (req, res) => {
    res.send('get req for specific user' + req.params.id)
})
router.get('/get-user-details/:state/:city', (req, res) => {
    res.send('get req for specific user' + req.params.state + req.params.city)
})

router.get("/getUsers", (req, res) => {
    res.send('users')
    const userObj = {
        id: 10,
        name: 'len',
        lastname: 'len',
        status: true
    }
    res.send(userObj)
})

router.post('/create-user', (req, res) => {
    res.send('create users')
})
router.delete('/delete-user', (req, res) => {

})
router.put('/update-user', (req, res) => {

})

module.exports = router