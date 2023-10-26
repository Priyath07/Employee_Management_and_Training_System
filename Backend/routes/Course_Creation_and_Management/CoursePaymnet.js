const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const CoursePayment = require('../../models/Course_Creation_and_Management/CoursePayment');

// Create a new payment
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Bankslip');
    },
    filename: (req, file, cb) =>
        cb(null, file.originalname),
});

const upload = multer({ storage: storage });

router.route('/coursePaymentAdd').post(upload.single('bankSlip'), (req, res) => {
    const newCoursePayment = new CoursePayment({
        courseImage: {
            data: fs.readFileSync(req.file.path),
            contentType: req.file.mimetype,
        },
        courseID: req.body.courseID,
        courseName: req.body.courseName,
        amount: req.body.amount,
        paymentDate: req.body.paymentDate, // Add paymentDate field
    });

    newCoursePayment
        .save()
        .then(() => {
            res.json('Course Added');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Server error' });
        });
});

// Retrieve all payments
router.get('/coursePaymentAll', async (req, res) => {
    try {
        const payments = await CoursePayment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
