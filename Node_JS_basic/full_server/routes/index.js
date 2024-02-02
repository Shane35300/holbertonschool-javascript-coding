const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Route / associée à la méthode getAll de AppController
router.get('/', AppController.getHomepage);

// Route /students associée à la méthode getAllStudents de StudentsController
router.get('/students', StudentsController.getAllStudents);

// Route /students/:major associée à la méthode getAllStudentsByMajor de StudentsController
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
