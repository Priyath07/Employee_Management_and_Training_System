const router = require("express").Router();
const Feedback = require("../../models/Help and Support Management/FeedbackModel");

// Add data
router.route("/add").post((req, res) => {
  const { name, id, subject, description, date, time, feedbackType } = req.body;

  const newFeedback = new Feedback({
    name,
    id,
    subject,
    description,
    date,
    time,
    feedbackType,
  });

  newFeedback
    .save()
    .then(() => {
      res.json("Feedback Submitted !!!");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Error with saving feedback", error: error.message });
    });
});

// Read data
router.route("/").get((req, res) => {
  Feedback.find()
    .then((feedbacks) => {
      res.json(feedbacks);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Error with fetching feedbacks", error: error.message });
    });
});

// Update data (PUT)
router.route("/update/:feedbackId").put(async (req, res) => {
  const feedbackID = req.params.feedbackId;
  const { name, id, subject, description, date, time, feedbackType } = req.body;
  const updateFeedback = {
    name,
    id,
    subject,
    description,
    date,
    time,
    feedbackType,
  };

  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(feedbackID, updateFeedback);
    if (!updatedFeedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    res.status(200).json({ status: "Feedback updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error with updating feedback", error: error.message });
  }
});

// Get feedbacks by ID
router.route("/get/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const feedback = await Feedback.find({ id });
    res.status(200).json({ status: "Feedbacks fetched", feedback });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Error with getting Feedbacks", error: error.message });
  }
});

// Delete feedback by ID
router.route("/delete/:id").delete(async (req, res) => {
  const feedbackID = req.params.id;
  try {
    await Feedback.findByIdAndDelete(feedbackID);
    res.status(200).json({ status: "Feedback Deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Error with deleting Feedback", error: error.message });
  }
});

module.exports = router;
