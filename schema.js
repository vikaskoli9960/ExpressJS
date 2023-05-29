const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/school', {
    useNewUrlParser: true
})

const Students = mongoose.model('students', {
    id:Number,
    name: String,
    standard: Number,
    age: Number,
    gender: String
})

module.exports = Students