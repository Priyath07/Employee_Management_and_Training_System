const express = require('express');
const router = express.Router();
const Resigning = require('../../models/Recruit and Resigning Management/Resigning'); // Import your Resigning model

// Create a new resignation
router.post('/resignations', async (req, res) => {
    try {
        const newResignation = new Resigning(req.body);
        const savedResignation = await newResignation.save();
        res.status(201).json(savedResignation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all resignations
router.get('/resignations', async (req, res) => {
    try {
        const resignations = await Resigning.find();
        res.json(resignations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get resignation by ID
router.get('/resignations/:id', async (req, res) => {
    try {
        const resignation = await Resigning.findById(req.params.id);
        if (!resignation) {
            return res.status(404).json({ error: 'Resignation not found' });
        }
        res.json(resignation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update resignation by ID
router.put('/resignations/:id', async (req, res) => {
    try {
        const updatedResignation = await Resigning.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedResignation) {
            return res.status(404).json({ error: 'Resignation not found' });
        }
        res.json(updatedResignation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete resignation by ID
router.delete('/resignations/:id', async (req, res) => {
    try {
        const deletedResignation = await Resigning.findByIdAndDelete(req.params.id);
        if (!deletedResignation) {
            return res.status(404).json({ error: 'Resignation not found' });
        }
        res.json({ message: 'Resignation deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
