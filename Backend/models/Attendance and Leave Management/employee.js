const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// attributes of employee
const employeeSchema =  new Schema({
   //schema
    empname:{
        type:String,
        required:true
    },
    
    empage:{
        type:Number,
        required:true
    },

    empgender:{
        type:String,
        required:true
    },

    empId:{
        type:String,
        required:true
    },

    empEmail:{
        type:String
    },

    empConNum:{
        type:String
    }


})

// documents that the above schemas are gonna save
const Employee = mongoose.model("employeeAttendance",employeeSchema);

//export model
module.exports = Employee;