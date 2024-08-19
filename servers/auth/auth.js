require('dotenv').config();
const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../Schema/userSchema');
const { getDoctorsByCity } = require('../Test/testDoctor');
const { getAllUniqueCities } = require('../components/city');

// Import the configured multer instance
const upload = require('../multer/multer');  // Update the path to the location of your multer configuration

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
router.post('/register', upload.single('image'), [
    body('username').isLength({ min: 3 }).trim(),
    body('email').isLength({ min: 10 }).isEmail(),
    body('password').isLength({ min: 5 }),
    body('location').isLength({ min: 2 }).trim() // Validate location
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, location } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            username,
            email,
            password, // Ensure to hash the password before saving
            location,
            image: req.file ? req.file.path : null // Save the image path
        });

        await user.save();

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login user
router.post('/login', [
    body('username').isLength({ min: 3 }).trim(),
    body('password').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        const doctorsInCity = getDoctorsByCity(user.location);

        if (doctorsInCity.length === 0) {
            return res.status(404).json({ msg: 'No doctors found in your city' });
        }

        return res.json({ token, doctors: doctorsInCity });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all unique cities where doctors are available
router.get('/places', (req, res) => {
    const cities = getAllUniqueCities();
    res.json(cities);
});

module.exports = router;
