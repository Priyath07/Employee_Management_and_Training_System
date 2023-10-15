const mongoose = require('mongoose');

// Define the schema for the Resigning model
const resigningSchema = new mongoose.Schema({
    employeeId: {
        type: String, // You can use the appropriate data type
        required: true
    },
    name: {
        type: String,
        required: true
    },
    years: {
        type: String, // You can use a more appropriate data type (e.g., Date) for the service duration
       required:true
    },
    reasonOfResigning: {
        type: String,
        required: true
    }
});

// Create a model using the schema
const Resigning = mongoose.model('Resigning', resigningSchema);

module.exports = Resigning;
