var express = require('express');
const { default: mongoose } = require('mongoose');
const StudentModel = require('../models/student.model');
var router = express.Router();

const studentModel = require('../models/student.model')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Student Route works');
});
router.post('/add', function (req, res, next) {
    console.log(req.body)
    let newStudent = new StudentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })
    newStudent.save((err, newStudent) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, message: 'user added successfully', studentObj: newStudent })
    })

});

router.get('/list', (req, res, next) => {
    StudentModel.find((err, response) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, resultsFound: response.length, students: response })
    })
})
router.get('/searchByFirstName', (req, res, next) => {
    const firstNameQuery = req.query.firstName
    StudentModel.find({ firstName: firstNameQuery }, (err, response) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, resultsFound: response.length, students: response })
    })
})
router.get('/searchByID', (req, res, next) => {
    const id_query = req.query.id
    StudentModel.findById(id_query, (err, response) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, resultsFound: response.length, students: response })
    })
})

module.exports = router;
