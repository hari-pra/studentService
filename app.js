const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const route = require('./routes/route');
app.use('/',route);

const connectdb =async()=>{
    try {
        await mongoose.connect('mongodb+srv://hariprasad:sangalehariprasad@studentcluster.yokmt.mongodb.net/',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connected to database ');
    } catch (error) {
        console.log('error');
        process.exit(1);
    }

};

connectdb();

const port = 3030;
app.listen(port,()=>{
    console.log(` app started on port ${port}`);
})