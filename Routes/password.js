import express from 'express';
const { getPassword } = require('../controllers/passwordController');

const router = express.Router();

// Define the route for password generation
router.get('/generate-password', getPassword);

module.exports = router;
