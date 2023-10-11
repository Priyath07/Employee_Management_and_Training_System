// routes/report.js

const express = require('express');
const router = express.Router();
const Apply = require('../../models/TransportationManagement/Applymodel');

router.get('/passenger-report', async (req, res) => {
  try {
    // Fetch all applies from the database
    const allApplies = await Apply.find();

    // Calculate passenger count for each route
    const routeCounts = {};
    allApplies.forEach((apply) => {
      const route = apply.Route;
      if (!routeCounts[route]) {
        routeCounts[route] = 1;
      } else {
        routeCounts[route]++;
      }
    });

    // Send the report data as JSON
    res.json(routeCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;