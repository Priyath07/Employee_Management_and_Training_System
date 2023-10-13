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

// // Upload a profile picture for a person by ID
// router.post('/upload/:id', upload.single('profilePicture'), async (req, res) => {
//   try {
//     const { id } = req.params; // Get the person's ID from the URL
//     const person = await Person.findById(id);

//     if (!person) {
//       return res.status(404).json({ message: 'Person not found' });
//     }

//     // Update the profilePicture field with the file path
//     person.profilePicture = req.file.path;

//     // Save the updated person document
//     await person.save();

//     res.json({ message: 'Profile picture uploaded successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


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


// router.post('/login', async (req, res) => {
//   try {
//     const { itNumber, nationalId } = req.body;
//     const person = await Person.findOne({ itNumber, nationalId });

//     if (!person) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Use a unique user identifier (e.g., user ID) to sign the token
//     const token = jwt.sign({ userId: person._id }, '200131003173');
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// routes/person.js



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











module.exports = router;
