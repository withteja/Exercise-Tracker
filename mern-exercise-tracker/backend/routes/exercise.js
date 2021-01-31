const Router = require('express').Router()

const exercise = require('../models/exercise.model')


// get all the users
Router.route('/').get((req,res)=>{
    exercise.find()
    .then(ex => res.json(ex))
    .catch(err=>res.status(400).json('error is '+ err));
});


// add the exercise
Router.route('/add').post((req,res)=>{
    const body = req.body
    const username = body.username
    const description = body.description
    const duration = body.duration
    const date = body.date

    const newexercise = new exercise({
        username,description,duration,date,
    });

    newexercise.save()
    .then(()=> res.json('exercise Added!'))
    .catch((err)=> res.status(400).json('Error '+err))
});

// get the exersie by the id from the Mongo database
Router.route('/:id').get((req,res)=>{
    exercise.findById(req.params.id)
    .then(ex => res.json(ex))
    .catch(err=> res.status(400).json("Error Found "+ err))
});

// Delete the exersie by the id from the Mongo database
Router.route('/:id').delete((req,res)=>{
    exercise.findByIdAndDelete(req.params.id)
    .then(ex => res.json("exercise Deleted"))
    .catch(err=> res.status(400).json("Error Found "+ err))
});

// Update the exersie by the id from the Mongo database
Router.route('/update/:id').post((req,res)=>{
    exercise.findById(req.params.id)
    .then(ex => {
        const body  = req.body
        ex.username = body.username
        ex.description = body.description
        ex.duration = Number(body.duration)
        ex.date = Date.parse(body.date)

        ex.save()
        .then(()=>res.json("exercise Update Sucessful!"))
        .catch(err => res.status(400).json('Error ')+ err)
    })
    .catch(err=> res.status(400).json("Error Found "+ err))
});




module.exports = Router