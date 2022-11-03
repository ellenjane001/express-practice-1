const mongoose = require('mongoose')
var studentSchema = mongoose.Schema({
    studentId: Number,
    firstName: String, lastName: String, age: Number
})

var StudentModel = mongoose.model('Student', studentSchema)


module.exports = StudentModel