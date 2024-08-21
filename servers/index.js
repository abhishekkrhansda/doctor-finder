const express = require('express');
const cors = require('cors');
const { db } = require('./db/db.js');
const authRouter = require('./auth/auth.js');
const Doctor = require('./Schema/doctorSchema.js');
const User = require('./Schema/userSchema.js');

const app = express();

app.use(express.json());
app.use(cors());

// Authentication routes
app.use('/api/auth', authRouter);

// Endpoint to get doctors by user's location (protected)
app.get('/doctors', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const doctorsInCity = await Doctor.find({ city: user.location });

    if (doctorsInCity.length === 0) {
      return res.status(404).json({ msg: 'No doctors found in your location' });
    }

    res.json(doctorsInCity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;

const server = () => {
  db()
    .then(() => {
      app.listen(PORT, () => {
        console.log("Listening on port", PORT);
      });
    })
    .catch((err) => {
      console.error("Failed to connect to the database", err);
    });
};

server();


