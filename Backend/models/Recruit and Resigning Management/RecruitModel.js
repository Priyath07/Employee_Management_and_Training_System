const mongoose = require('mongoose');

const Schema = mongoose.Schema;


  
const recruitSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    highSchool: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    graduate: {
        type: String,
        enum: ['yes', 'no'], // Assuming only 'yes' or 'no' are valid options
        required: true,
    },
    diploma: {
        type: String,
        required: true,
    },
    additionalInfo: {
        type: String,
    },
    cv: {
        type: String, // Store the CV file name
    },

});

const Recruit = mongoose.model('Recruit', recruitSchema);

module.exports = (Recruit);

// // Define the schema for the applicant
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const recruitSchema = new Schema({
//     userId: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     address: {
//         type: String,
//         // required: true,
//     },
//     nic: {
//         type: String,
//         // required: true,
//     },
//     emailAddress: {
//         type: String,
//         // required: true,
//     },
//     date: {
//         type: String,
//         // required: true,
//     },
//     highSchoolName: {
//         type: String,
//         // required: true,
//     },
//     city: {
//         type: String,
//         // required: true,
//     },
//     fromDate: {
//         type: String,
//         // required: true,
//     },
//     toDate: {
//         type: String,
//         // required: true,
//     },
//     graduate: {
//         type: String,
//         // required: true,
//     },
//     graduateExplanation: {
//         type: String,
//         // required: true,
//     },
//     authorized: {
//         type: String,
//         // required: true,
//     },
//     convicted: {
//         type: String,
//         // required: true,
//     },
//     position: {
//         type: String,
//         // required: true,
//     },
//     Diploma: {
//         type: String,
//         // required: true,
//     },
//     cv: {
//         type: String,
//     },
//     cvFileName: {
//         type: String,
//     }
// });

// // Create the Applicant model
// const Recruit = mongoose.model('Recruit', recruitSchema);
// module.exports = (Recruit);

