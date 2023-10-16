// const mongoose = require('mongoose')
// const multer = require('multer');
// const path = require('path');

// const Schema =  mongoose.Schema


// const shuttleSchema = new Schema({

   
//     VehicleNumber : {
//         type : String,
//         required : true
//     },
//     Route : {
//         type : String,
//         required : true
//     },
//     selectedRoute: {
//         type: String, // This field will store the selected subject from the dropdown
        
//     },
    
//     VehicleType : {
//         type : String,
//         required : true
//     },
//     selectedType: {
//         type: String, // This field will store the selected subject from the dropdown
        
//     },
//     DriverName : {
//         type : String,
//         required : true
//     },
    
// })
// shuttleSchema.index({ Route: 'text' });

// const Shuttle = mongoose.model("shuttle",shuttleSchema)

// module.exports = {Shuttle}


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shuttleSchema = new Schema({
  VehicleNumber: String,
  Route: String,
  VehicleType: String,
  DriverName: String,
});

const Shuttle = mongoose.model("Shuttle", shuttleSchema);

module.exports = Shuttle;
