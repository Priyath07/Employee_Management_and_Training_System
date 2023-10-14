// routes/person.js
const express = require('express');
const router = express.Router();
const Person = require('../../models/Customer Management/person');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a new person
router.post('/add', async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all persons
router.get('/personlist', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validate the update data here, e.g., check for required fields or data types

    // Find and update the person by ID
    const updatedPerson = await Person.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
    });

    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    return res.json(updatedPerson);
  } catch (error) {
    // Handle different types of errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'Server error' });
    }
  }
});


// Delete a person by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    await Person.findByIdAndRemove(req.params.id);
    res.sendStatus(204); // 204 No Content indicates a successful deletion
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



//search
router.get('/search', async (req, res) => {
  try {
    const {query}=req.query;
    const results=await Person.find({$text:{$search:query}});
    res.json(results);
  } catch (error){
    res.status(500).json({ error: err.message });
  }
});


// Read one person by ID
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the URL parameters
    const person = await Person.findById(userId);

    if (!person) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(person);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Read one person by nationalID
router.get('/nationalId/:nationalId', async (req, res) => {
  try {
    const nationalId = req.params.nationalId;
    const person = await Person.findOne({ nationalId });

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      res.json(person);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/lecturer/nationalId/:nationalId', async (req, res) => {
  try {
    const nationalId = req.params.nationalId;
    const person = await Person.findOne({ nationalId });

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      res.json(person);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/driver/nationalId/:nationalId', async (req, res) => {
  try {
    const nationalId = req.params.nationalId;
    const person = await Person.findOne({ nationalId });

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      res.json(person);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/employee/nationalId/:nationalId', async (req, res) => {
  try {
    const nationalId = req.params.nationalId;
    const person = await Person.findOne({ nationalId });

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      res.json(person);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a login route
router.post('/login', async (req, res) => {
  try {
    const { itNumber, nationalId } = req.body;

    // Check for specific admin users
    if (itNumber === 'ITAdmin' && nationalId === '200131003173') {
      // Simulate admin login and navigation page
      return res.status(200).json({ message: 'Welcome Admin', isITAdmin: true });
    }

    if (itNumber === 'ITLecturer' && nationalId === '200231003173') {
      // Simulate lecturer login and navigation page
      return res.status(200).json({ message: 'Welcome Lecturer', isITLecturer: true });
    }

    if (itNumber === 'ITDriver' && nationalId === '200331003173') {
      // Simulate driver login and navigation page
      return res.status(200).json({ message: 'Welcome Driver', isITDriver: true });
    }

    if (itNumber === 'ITEmployee' && nationalId === '200531003173' ) {
      return res.status(200).json({message: 'Welcome Employee', isITEmployee: true});
    }

    // If not an admin user, check for regular users in the database
    const user = await Person.findOne({ itNumber, nationalId });

    if (!user) {
      // If no matching user is found, send an error response
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // You can add additional validation checks here, such as checking user's userType, etc.

    // If the user is found, you can send a success response
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
