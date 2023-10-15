const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const applySchema = new Schema({

   
    Name : {
        type : String,
        required : true
    },
    Id : {
        type : String,
        required : true
    },
    PhoneNo : {
        type : String,
        required : true
    },
    Route : {
        type : String,
        required : true
    },
    selectedRoute: {
        type: String, // This field will store the selected subject from the dropdown
        
    },
    PickupLocation : {
        type : String,
        required : true
    },
    
    
})
applySchema.index({ Name: 'text', Id: 'text', PhoneNo: 'text' ,Route:'text',PickupLocation:'text'});



const Apply = mongoose.model("apply",applySchema)

module.exports =Apply