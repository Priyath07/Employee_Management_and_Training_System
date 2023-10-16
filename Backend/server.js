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

//awi
const employeeSalaryRouter = require("./routes/Salary_and_Benefits_Management/employees.js"); // Change the import to employeeRouter

app.use("/Salary_and_Benefits_Management/employee", employeeSalaryRouter); // Change the route to "/employee"


const shuttleRouter = require('./routes/TransportationManagement/Shuttles');
app.use('/shuttle', shuttleRouter);

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

//Kdeelz


//person router
const personRoutes = require('./routes/Customer Management/person.js');
app.use('/person', personRoutes);

const recruitRoutes = require('./routes/Recruit and Resigning Management/Recruit.js');
app.use('/Recruit', recruitRoutes);

const resigningRoutes = require('./routes/Recruit and Resigning Management/Resigning.js'); // Import your resigning routes
app.use('/resigning', resigningRoutes);

// Use the authRoutes for authentication

// Login route
app.post('/auth/login', (req, res) => {
  const { itNumber, nationalId } = req.body;

  // Check if provided itNumber and nationalId match specific values
  if (itNumber === 'IT21801822' && nationalId === '200131003173') {
    // Credentials are valid, generate a token
    const token = jwt.sign({ itNumber, nationalId }, 'your-secret-key');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Protected route
app.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'You have access to this route!' });
});

// Authentication middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    jwt.verify(token, 'your-secret-key');
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
const PORT = process.env.PORT || 8070;
app.use('/uploads', express.static('uploads'));
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});

const courseRouter = require("./routes/Course_Creation_and_Management/course.js");
app.use("/Course_Creation_and_Management/course", courseRouter);

const lecture = require('./routes/Course_Creation_and_Management/lecture.js');
app.use('/Course_Creation_and_Management/lecture', lecture);

// Include your payment routes
const paymentRoutes = require(`./routes/Course_Creation_and_Management/CoursePaymnet.js`);
app.use("/Course_Creation_and_Management/CoursePayment", paymentRoutes);

