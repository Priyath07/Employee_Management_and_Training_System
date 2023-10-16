const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoursePaymentSchema = new Schema({
    courseID: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    bankSlip: {
        data: Buffer,
        contenttype: String
    },
    paymentDate: {
        type: Date, // Add a new field for payment date
        required: true // You can change this to 'false' if payment date is not mandatory
    }
});

const CoursePayment = mongoose.model('CoursePayment', CoursePaymentSchema);

module.exports = CoursePayment;
