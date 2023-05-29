const express = require('express')
const router = express.Router()
const Students = require('./../schema')

router.get('/', (request, response) => {
    Students.find().then((documents) => {
        response.json(documents)
    })
})

router.get('/id/:id', (request, response) => {
    const id = request.params.id
    Students.findOne({ id: id }).then((documents) => {
        response.json(documents)
    })
})

router.get('/standard/:standard', (request,
    response) => {
    const standard = request.params.standard
    Students.find({ standard: standard }).then
        ((documents) => {
            response.json(documents)
        })
})

router.get('/add/:id/:name/:standard/:age/:gender',
    (request, response) => {
        const students = new Students(request.params)

        Students.save().than((documents) => {
            response.send('Document saved')
        })
    })

// update data

router.get('/update/:id/:name/:standard/:age/:gender',
    (request, response) => {
        const student = new Students(request.params)

        Students
            .updateOne({id: student,id},
                
                {$set:
                    {
                        name: student.name,
                        standard: student.standard,
                        age: student.age,
                        gender: student.gender
                    }
                }
            )
            .then((documents)=>{
                response.send('Data updated')
            })
    })


    // data delete

    router.get('/delete/:id', (request, response) => {
        const student = new Students(request.params)

        Students
        .deleteOne({id: student.id})
        .then((documents)=> {
            response.send('Data deleted')
        })
    })

module.exports = router