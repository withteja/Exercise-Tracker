const Router = require('express').Router()

let User = require('../models/user.model')


// get all the users
Router.route('/').get((req,res)=>{
    User.find()
    .then(users=> res.json(users))
    .catch(err=> res.status(400).json('Error: '+err))
});


// add a new user to the Mongo DB
Router.route('/add').post((req,res)=>{
    const username = req.body.username
    const newUser = new User({username});
    console.log(newUser)
    console.log(req.body.username)
    newUser.save()
    .then(()=>res.json('User added! '))
    .catch(err=> res.status(400).json('Errot '+err))
});



// get the User by id from the database
Router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then((users)   => res.json(users))
    .catch(err => res.json("Error "+err))
})


//update the user details to the database
Router.route('/update/:id').post((req,res)=>{
    User.findByIdAndUpdate(req.params.id)
    .then((users)=> {
        const body = req.body
        users.username = body.username

        users.save()
        .then(()=> res.json("User data has been upated!"))
        .catch(err => res.status(400).json("Error "+err))
    })
    .catch(err => res.status(400).json("Error "+err))
});


// Delete a user
Router.route('/delete/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((users)=> res.json("Deleted user successfully"))
    .catch(err => res.status(400).json("Error "+err))
});

module.exports = Router