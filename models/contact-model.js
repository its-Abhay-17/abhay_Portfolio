const mongoose = require('mongoose');
const {Schema} = require('mongoose');

let contactSchema = new Schema({
    username:{
        type:"String",
        require:true
    },
    eMail:{
        type:"String",
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    msg:{
        type:"String",
        require:true
    }            
})


const contact = mongoose.model('contact',contactSchema);

module.exports = contact