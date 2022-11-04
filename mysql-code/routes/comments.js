var express = require('express');
var router = express.Router();
var connection = require('../db_config')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/c', (req, res, next) => {
    var getCommentsQ = "SELECT * FROM comments"

    connection.query(getCommentsQ, (err, result) => {
        if (err) {
            console.log(err)
            res.send('unable to fetch comments')
        }
        else
            res.send(result)
    })
})

router.get('/c/:id', (req, res, next) => {
    var getCommentsQ = "SELECT * FROM comments WHERE `comment_id` = " + req.params.id

    connection.query(getCommentsQ, (err, result) => {
        if (err) {
            console.log(err)
            res.send('unable to fetch comment')
        }
        else
            res.send(result)
    })
})

router.post('/add_comments', (req, res, next) => {
    let { title, desc, is_active } = req.query
    var addCommentsQ = "INSERT INTO comments (`comment_title`,`comment_desc`,`comment_is_active`) VALUES ('" + title + "','" + desc + "','" + is_active + "')"
    connection.query(addCommentsQ, (err, result) => {
        if (err) {
            console.log(err)
            res.send('unable to add comment')
        }
        else
            res.send(result)
    })
})

router.put('/update_comment', (req, res, next) => {
    let { title, id } = req.query
    var updateCommentsQ = "UPDATE comments SET `comment_title` = '" + title + "' WHERE `comment_id` = " + id 
    connection.query(updateCommentsQ, (err, result) => {
        if (err) {
            console.log(err)
            res.send('unable to update comment')
        }
        else
            res.send(result)
    })
})
module.exports = router;
