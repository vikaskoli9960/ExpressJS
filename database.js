const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/school', {
    useNewUrlParser: true
})

const conn = mongoose.connection
conn.on('connected', ()=> {
    console.log('MongoDB connected')
})

conn.on('disconnected', ()=> {
    console.log('angoDB disconnected')
})
conn.on('error', console.error.bind(console))

module.exports = conn