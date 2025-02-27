const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define Registration schema
const RegistrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  graduationYear: Number
});

const Registration = mongoose.model('Registration', RegistrationSchema);

// POST endpoint for registration
// router.post('/register', async (req, res) => {
//   // console.log('Registration endpoint called:', req.body);
//   try {
//     const { firstName, lastName, graduationYear } = req.body;
//     const newRegistration = new Registration({
//       firstName,
//       lastName,
//       graduationYear
//     });

//     const savedRegistration = await newRegistration.save();
//     // console.log('Saved Registration:', savedRegistration);
//     res.json({ message: 'Registration successful' });
//   } catch (error) {
//     console.error('Error saving registration:', error);
//     res.status(500).json({ error: 'Failed to register' });
//   }
// });

router.post('/register', async (req, res) => {
  try {
      console.log("Received registration request:", req.body); // Debugging
      const { firstName, lastName, graduationYear } = req.body;
      if (!firstName || !lastName || !graduationYear) {
          return res.status(400).json({ error: "All fields are required" });
      }
      
      const newRegistration = new Registration({ firstName, lastName, graduationYear });
      await newRegistration.save();
      
      res.json({ message: "Registration successful" });
  } catch (error) {
      console.error("Error saving registration:", error);
      res.status(500).json({ error: "Failed to register" });
  }
});

module.exports = router;