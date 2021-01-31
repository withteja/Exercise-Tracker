const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;


mongoose.connect(uri, {useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology: true });



const usersRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercise');


app.use('/exercises',exerciseRouter);
app.use('/users',usersRouter);



app.listen(port,()=>{
console.log(`listening at port ${port}`);
});

