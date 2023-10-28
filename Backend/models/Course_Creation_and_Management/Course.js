// const mongoose = require ('mongoose'); //import mongoose

// const Schema = mongoose.Schema;

// const studentSchema = new Schema({
    
//     name : {
//         type : String,
//         required : true // required : true, means definietly name cannot be null value // like backend validation
//     },
//     age : {
//         type : Number,
//         required : true
//     },
//     gender : {
//         type : String,
//         required : true
//     }
    
// })

// const Student = mongoose.model("Student", studentSchema); //parameter Student is document, it's act like a database Table

// module.exports = Student; //you need to export to Student document, it's important for routes 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseID : {
        type : String,
        required : true
    },

    courseName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    
    courseImage: {
        data: Buffer,
        contenttype: String, // You might want to use a different type like Buffer if you're storing binary data
        // required: true
    },
    price: {
        type: String,
        required: true
    },
    lectureName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
