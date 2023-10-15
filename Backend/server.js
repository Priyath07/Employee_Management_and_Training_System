const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();


// // Use middleware to parse JSON requests
// app.use(bodyParser.json());

// // In-memory data store for salary records
// const salaryRecords = [];

// // API endpoint to calculate and store salary records
// app.post("/calculate-salary", (req, res) => {
//   const { monthlySalary, daysWorked } = req.body;

//   if (!monthlySalary || !daysWorked) {
//     return res.status(400).json({ error: "Please provide monthlySalary and daysWorked." });
//   }

//   const monthlySalaryFloat = parseFloat(monthlySalary);
//   const daysWorkedInt = parseInt(daysWorked);

//   if (isNaN(monthlySalaryFloat) || isNaN(daysWorkedInt)) {
//     return res.status(400).json({ error: "Please enter valid numeric values." });
//   }

//   const dailySalary = (monthlySalaryFloat / 30).toFixed(2);
//   const generatedSalary = (dailySalary * daysWorkedInt).toFixed(2);

//   const record = {
//     monthlySalary: monthlySalaryFloat,
//     daysWorked: daysWorkedInt,
//     dailySalary,
//     generatedSalary,
//   };

//   salaryRecords.push(record);

//   res.status(201).json(record);
// });

// // API endpoint to retrieve salary records
// app.get("/salary-records", (req, res) => {
//   res.json(salaryRecords);
// });




require("dotenv").config();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection success!");
});

const employeeRouter = require("./routes/Salary_and_Benefits_Management/employees.js"); // Change the import to employeeRouter

app.use("/Salary_and_Benefits_Management/employee", employeeRouter); // Change the route to "/employee"

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});




// const PORT = process.env.PORT || 8070;

// app.use(cors());
// app.use(bodyParser.json());


// const URL = process.env.MONGODB_URL;

// mongoose.connect(URL,{
//     //useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//    //useFindAndModify: true
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("Mongodb Connection success!");
// });

// const studentRouter = require("./routes/Salary_and_Benefits_Management/students.js");

// app.use("/Salary_and_Benefits_Management/student",studentRouter);

// app.listen(PORT, () => {
//     console.log(`server is up and runnign on port number : ${PORT}`)
// });