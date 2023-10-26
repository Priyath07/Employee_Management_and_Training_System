const express = require("express"); //express variable get for the express frame work //express package import and assign to the express variable
const mongoose = require("mongoose"); //mongoose variable initialize to mongoose 
const bodyParser = require("body-parser");  
const cors = require("cors");
const dotnet = require("dotenv");
const app = express();
require("dotenv").config();

//create server connection
const PORT = process.env.PORT || 8050; //create port number // an ||(or) means if this port no 8050 is not available then give another free port no 

app.use(cors());
app.use(bodyParser.json()); //why use json- it's use to key values paire.

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    //useCreateIndex: true, //options
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
//once means ,u want to login db at a one time only 
connection.once("open", () => { //create function using arrow sign

    console.log("Mongodb connection Success!");

});

//After creating student.js routes file so now you need to access the routes files ,student.js

const courseRouter = require("./routes/Course_Creation_and_Management/course.js");
app.use("/Course_Creation_and_Management/course", courseRouter);

const lecture = require('./routes/Course_Creation_and_Management/lecture.js');
app.use('/Course_Creation_and_Management/lecture', lecture);

// Include your payment routes
const paymentRoutes = require(`./routes/Course_Creation_and_Management/CoursePaymnet.js`);
app.use("/Course_Creation_and_Management/CoursePayment", paymentRoutes);

app.use(express.static(`uploads`))

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

//last step is now we got to run this connection in port after the mongodb is runing
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
});
