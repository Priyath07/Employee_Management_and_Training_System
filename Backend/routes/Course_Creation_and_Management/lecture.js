const express = require('express');
const router = express.Router();
const Lecture = require("../../models/Course_Creation_and_Management/Lecture");

// Route to get all lectures
router.get('/lectureList', async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.json(lectures);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving lectures' });
  }
});

// Route to get a specific lecture by ID
router.get('/lectureProfile/:id', async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) {
      return res.status(404).json({ error: 'Lecture not found' });
    }
    res.json(lecture);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving lecture' });
  }
});

// Route to create a new lecture
router.post('/addLecture', async (req, res) => {
  const { title, lecturer, description } = req.body;

  if (!title || !lecturer || !description) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  const newLecture = new Lecture({
    title,
    lecturer,
    description,
  });

  try {
    const savedLecture = await newLecture.save();
    res.status(201).json(savedLecture);
  } catch (err) {
    res.status(500).json({ error: 'Error creating a new lecture' });
  }
});

// Route to update a lecture by ID
router.put('/updateLecture/:id', async (req, res) => {
  try {
    const updatedLecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLecture) {
      return res.status(404).json({ error: 'Lecture not found' });
    }
    res.json(updatedLecture);
  } catch (err) {
    res.status(500).json({ error: 'Error updating lecture' });
  }
});

// Route to delete a lecture by ID
router.delete('/deleteLecture/:id', async (req, res) => {
  try {
    const deletedLecture = await Lecture.findByIdAndRemove(req.params.id);
    if (!deletedLecture) {
      return res.status(404).json({ error: 'Lecture not found' });
    }
    res.json(deletedLecture);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting lecture' });
  }
});

module.exports = router;
