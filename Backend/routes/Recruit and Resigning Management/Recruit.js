const express = require('express');
const router = express.Router();
const Recruit = require('../../models/Recruit and Resigning Management/RecruitModel'); // Import your Recruit model


// Create a new recruit
router.post('/recruitadd', async (req, res) => {
    
    try {
        const recruit = new Recruit(req.body);
        await recruit.save();
        res.status(201).json(recruit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all recruits
router.get('/recruits', async (req, res) => {
    try {
        const recruits = await Recruit.find();
        res.json(recruits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get recruit by ID
router.get('/recruits/:id', async (req, res) => {
    try {
        const recruit = await Recruit.findById(req.params.id);
        if (!recruit) {
            return res.status(404).json({ error: 'Recruit not found' });
        }
        res.json(recruit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update recruit by ID
router.put('/recruits/:id', async (req, res) => {
    try {
        const recruit = await Recruit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recruit) {
            return res.status(404).json({ error: 'Recruit not found' });
        }
        res.json(recruit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Retrieve the recruit data for the edit form

// Delete recruit by ID
router.delete('/recruits/:id', async (req, res) => {
    try {
        const recruit = await Recruit.findByIdAndDelete(req.params.id);
        if (!recruit) {
            return res.status(404).json({ error: 'Recruit not found' });
        }
        res.json({ message: 'Recruit deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/recruits/search', async (req, res) => {
    const name = req.query.name;
    try {
        const recruits = await Recruit.find({ fullName: { $regex: name, $options: 'i' } });
        res.json(recruits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;