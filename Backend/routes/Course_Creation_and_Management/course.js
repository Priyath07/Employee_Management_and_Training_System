const router = require("express").Router();
const Course = require("../../models/Course_Creation_and_Management/Course");

// http://localhost:8050/Course_Creation_and_Management/course/add

// Create / Data insert
router.route("/add").post((req, res) => {
    const {
        courseID,
        courseName,
        description,
        duration,
        courseImage,
        price,
        lectureName,
        category
    } = req.body;

    const newCourse = new Course({
        courseID,
        courseName,
        description,
        duration,
        courseImage,
        price,
        lectureName,
        category
    });

    newCourse.save()
        .then(() => {
            res.json("Course Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// Read / Data view
router.route("/").get((req, res) => {
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
        addedDate,
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
        addedDate,
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

module.exports = router;
