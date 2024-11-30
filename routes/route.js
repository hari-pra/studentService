const express = require('express');
const router = express.Router();

const studdb = require('../models/studdb');

router.get('/welcome',(req,res)=>{
    res.send('welcome to home page');
});

router.get('/getall',async(req,res)=>{
    try {
        const data = await studdb.find();
        res.send(data).status(500);
    } catch (error) {
        console.log(error);
    }
});

router.post('/add',async(req,res)=>{
    try {
        const stud = new studdb(req.body);
        await stud.save();
        res.send('data saved in db ')
    } catch (error) {
        console.log(error);
        res.send('somethiing went wrong');
    }
});
// get by div
router.get('/getall/:div',async(req,res)=>{
    try {
        const division = req.params.div;
        const data = await studdb.find({div:division});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('something went wrong ');
    }
});
// find by name of sudent 
router.get('/get/:name',async(req,res)=>{
    try {
        const fname = req.params.name;
        const data  = await studdb.find({name:fname});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('something went wrong ');
    }
});
// update by roll roll and div
router.put('/update',async(req,res)=>{
    try {
        const{name,roll,div} = req.body;
        await studdb.findOneAndUpdate({name:name,roll:roll},{div:div},{new:true});
        res.send('updated successfully');
    } catch (error) {
        console.log(error);
    }studdb.find
});





module.exports = router;