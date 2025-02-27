const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// // Define Registration schema
// const RegistrationSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   graduationYear: Number
// });

// Define Registration schema
const RegistrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  graduationYear: { type: Number, required: true }
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

// POST endpoint for registration
router.post('/register', async (req, res) => {
  console.log("📌 Received Registration Data:", req.body); // Log the received request body

  try {
    const { firstName, lastName, graduationYear } = req.body;

    if (!firstName || !lastName || !graduationYear) {
      console.error("❌ Missing Fields:", req.body); // Log missing fields
      return res.status(400).json({ error: "All fields are required" });
    }

    const newRegistration = new Registration({
      firstName,
      lastName,
      graduationYear
    });

    await newRegistration.save();
    res.json({ message: "✅ Registration successful" });
  } catch (error) {
    console.error("❌ Error saving registration:", error);
    res.status(500).json({ error: "Failed to register" });
  }
});

module.exports = router;