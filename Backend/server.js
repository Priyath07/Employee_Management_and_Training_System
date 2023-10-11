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
