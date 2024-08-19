// auth.js
require('dotenv').config();
const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../Schema/userSchema');
const router = express.Router();
const { getDoctorsByCity } = require('../Test/testDoctor');

const JWT_SECRET = process.env.JWT_SECRET ;

// Register a new user
router.post('/register', [
    body('username').isLength({ min: 3 }).trim(),
    body('email').isLength({min : 10}),
    body('password').isLength({ min: 5 }),
    body('location').isLength({ min: 2 }).trim() // Validate location
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username,email, password, location } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ username, email,password, location });
        await user.save();

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login user (no changes needed here)
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

        const DoctorsInCity=getDoctorsByCity(user.location);
        
        if(DoctorsInCity.length == 0){
            res.status(400).json({"msg":"no doctor found on that city"});
        }

        
        return res.json({token,DoctorsInCity});
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
