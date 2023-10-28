const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Course = require("../../models/Course_Creation_and_Management/Course"); // Adjust the path to your Course model

const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) =>
        cb(null, file.originalname)
})

const upload = multer({ storage: storage });

router.route("/addForms").post(upload.single('courseImage'), (req, res) => {
    const newCourse = new Course({  // Replace "new UploadImage" with "new Course"
        courseImage: {
            data: fs.readFileSync(req.file.path),
            contentType: req.file.mimetype
        },
        courseID: req.body.courseID,
        courseName: req.body.courseName,
        description: req.body.description,
        duration: req.body.duration,
        price:req.body.price,
        lectureName: req.body.lectureName,
        category: req.body.category,
    });

    newCourse.save()
        .then(() => {
            res.json("Course Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Server error" });
        });
});


// Read / Data view
router.route("/AddedCourses").get((req, res) => {
    Course.find()
        .then((courses) => {
            res.json(courses);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// http://localhost:8050/Course_Creation_and_Management/course/update/5fsadgf56rq <----userId

router.route("/update/:id").put(async (req, res) => {
    const courseId = req.params.id;
    const {
        courseID,
        courseName,
        description,
        duration,
        //addedDate,
        courseImage,
        price,
        lectureName,
        category
    } = req.body;

    const updateCourse = {
        courseID,
        courseName,
        description,
        duration,
        //addedDate,
        courseImage,
        price,
        lectureName,
        category
    };


     const update = await Course.findOneAndUpdate({courseID : courseId}, updateCourse)
        .then(() => {
            res.status(200).json({ status: "Course Updated" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ status: "Error with updating data", error: err.message });
        });
});

router.route("/delete/:id").delete(async (req, res) => {
    const courseId = req.params.id;
    
     
     await Course.findOneAndDelete({courseID : courseId})
        .then((course) => {
            res.status(200).json({ status: "Course Deleted", course });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ status: "Error with delete course", error: err.message });
        });
});

// How to fetch and get the data only for one course
router.route("/get/:id").get(async (req, res) => {
    const courseId = req.params.id;
    
     const update = await Course.findOne({courseID : courseId})
        .then((course) => {
            res.status(200).json({ status: "Course Fetched", course });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ status: "Error with get course", error: err.message });
        });
});


// Search courses by courseName or category
router.route("/search").get(async (req, res) => {
    const { query } = req.query; // Get the search query from the URL query parameters

    // Use a regular expression to perform a case-insensitive search on courseName or category
    const searchResults = await Course.find({
        $or: [
            { courseName: { $regex: query, $options: "i" } }, // Case-insensitive search for courseName
            { category: { $regex: query, $options: "i" } },   // Case-insensitive search for category
        ],
    })
    .catch((err) => {
        console.log(err.message);
        res.status(500).json({ status: "Error with search", error: err.message });
    });

    res.status(200).json({ status: "Search Results", results: searchResults });
});

// Sort courses by a field (e.g., price or duration)
router.route("/sort/:field").get(async (req, res) => {
    const { field } = req.params;

    let sortField = field;
    if (field === "price") {
        // If sorting by price, convert to numeric value for correct sorting
        sortField = "price";
    } else if (field === "duration") {
        // If sorting by duration, convert to numeric value for correct sorting
        sortField = "duration";
    }

    const sortOrder = 1; // 1 for ascending order, -1 for descending order

    // Sort the courses based on the specified field and order
    const sortedCourses = await Course.find().sort({ [sortField]: sortOrder })
    .catch((err) => {
        console.log(err.message);
        res.status(500).json({ status: "Error with sorting", error: err.message });
    });

    res.status(200).json({ status: "Sorted Courses", courses: sortedCourses });
});

module.exports = router;

