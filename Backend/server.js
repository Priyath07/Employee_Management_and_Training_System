const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

// Express app
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection Success');
});

// Routes
const shuttleRouter = require('./routes/TransportationManagement/Shuttles');
app.use('/project', shuttleRouter);

const applyRouter = require('./routes/TransportationManagement/ApplyShuttles');
app.use('/apply', applyRouter);

const reportRouter = require('./routes/TransportationManagement/report');
app.use('/report', reportRouter);


const feedbackRouter = require("./routes/Help and Support Management/Feedbacks")
app.use("/feedback",feedbackRouter)

const ticketRouter = require("./routes/Help and Support Management/Tickets")
app.use("/ticket",ticketRouter)

// sandaru

//create access in the backend to employee.js file on routes
const employeeRouter = require("./routes/Attendance and Leave Management/employees")
//execute employee.js
app.use("/employee",employeeRouter);

const requestLeavesRouter = require("./routes/Attendance and Leave Management/RequestLeaves");

// Use the RequestLeaves router as a middleware
app.use("/leave", requestLeavesRouter); // Example URL prefix

const attendanceRouter = require("./routes/Attendance and Leave Management/AttendanceFormRout");
app.use("/attendance",attendanceRouter);

//Medical Leave
const approvedmedicalLvRouter = require("./routes/Attendance and Leave Management/ApprovedMedicalLvRout");
app.use("/approvedMedicLv", approvedmedicalLvRouter); 

//duty leave
const approveddutyLvRouter = require("./routes/Attendance and Leave Management/ApprovedDutyLvRout");
app.use("/approvedDutyLv",approveddutyLvRouter);

//halfday leave
const approvedHalfDayLvRouter = require("./routes/Attendance and Leave Management/ApprovedHalfdayLvRout");
app.use("/approvedhalfDayLv",approvedHalfDayLvRouter);

//offtime
const OffTimeFormRouter = require("./routes/Attendance and Leave Management/OffTimeFormRout");
app.use("/offTime",OffTimeFormRouter);

//leave history
const leaveHistoryRouter = require("./routes/Attendance and Leave Management/LeaveHistoryRout");
app.use("/leaveHistory",leaveHistoryRouter);

// Multer file upload
const upload = multer({ storage: storage });

app.post('/upload', upload.single('VehicleImage'), (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    res.send('File uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading file.'); // Handle errors properly
  }
});

const PORT = process.env.PORT || 8070;
app.use('/uploads', express.static('uploads'));
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
