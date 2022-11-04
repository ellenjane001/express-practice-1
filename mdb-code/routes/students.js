var express = require('express');
const { default: mongoose } = require('mongoose');
const StudentModel = require('../models/student.model');
var router = express.Router();

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

router.put('/update', (req, res, next) => {
    const id = req.query.id
    const lastName = req.query.lastName
    StudentModel.findByIdAndUpdate(id, { lastName: lastName }, { new: true }, (err, response) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, resultsFound: response.length, students: response })
    })
})
router.put('/updateAll', (req, res, next) => {
    const firstName = req.query.firstName
    StudentModel.updateMany({ age: 24 }, { firstName: firstName }, (err, response) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, resultsFound: response.length, students: response })
    })
})
router.delete('/deleteUser', (req, res, next) => {
    const id = req.query.id
    StudentModel.findByIdAndDelete(id, (err, response) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, resultsFound: response.length, students: response })
    })
})

router.delete('/removeUser', (req, res, next) => {
    const lastName = req.query.lastName
    StudentModel.remove({ lastName: lastName }, (err, response) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, resultsFound: response.length, students: response })
    })
})

router.delete('/removeOneUser', (req, res, next) => {
    const lastName = req.query.lastName
    StudentModel.findOneAndRemove({ lastName: lastName }, (err, response) => {
        if (err)
            res.send(err)
        else
            res.send({ status: 200, resultsFound: response.length, students: response })
    })
})

module.exports = router;
