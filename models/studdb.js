const mongoose = require('mongoose');

const studSchema = new mongoose.Schema({
    name:{
        type:String
    },
    div:{
        type:String
    },
    roll:{
        type:Number
    }
});

module.exports = mongoose.model('studdb',studSchema);