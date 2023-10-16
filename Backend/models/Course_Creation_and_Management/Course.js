

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
        //required: true
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
