const mongoose = require('mongoose')
const multer = require('multer');
const path = require('path');

const Schema =  mongoose.Schema
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = path.extname(file.originalname);
      cb(null, 'vehicle_' + uniqueSuffix + fileExtension);
      
    },
  });

  const upload = multer({ storage });

const shuttleSchema = new Schema({

    VehicleNumber : {
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
    VehicleImage : {
        type : String,
        required : true
    },
    VehicleType : {
        type : String,
        required : true
    },
    selectedType: {
        type: String, // This field will store the selected subject from the dropdown
        
    },
    DriverName : {
        type : String,
        required : true
    },
    
})
shuttleSchema.index({ Route: 'text' });

const Shuttle = mongoose.model("shuttle",shuttleSchema)

module.exports = {Shuttle, upload}