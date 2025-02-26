const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define Contact schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model('Contact', ContactSchema);

// POST endpoint for contact form
router.post('/contact', async (req, res) => {
  // console.log('Contact form data received:', req.body);
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      message
    });

    const savedContact = await newContact.save();
    // console.log('Saved Contact:', savedContact);
    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;