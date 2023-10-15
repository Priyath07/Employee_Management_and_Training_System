const express = require('express');
const {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
  getProjectById,
  updateProjectbyChecked,
} = require('../../../controllers/projectController');

const router = express.Router();

//get all projects
router.get('/', getProjects);

//POST a new project

router.post('/create/', (req, res) => createProject(req, res));

//Delete a project
router.delete('/:id', deleteProject);

//Update a workout
router.patch('/:id', updateProject);

// Get a single project by ID
router.get('/:id', getProjectById);

router.post('/update/', updateProjectbyChecked);

module.exports = router;
