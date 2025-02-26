const express = require('express');
const router = express.Router();
const NewModel = require('../models/NewModel');

router.post('/new', async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newEntry = new NewModel({ title, description, date });
    await newEntry.save();
    res.json({ message: 'New entry saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving new entry' });
  }
});

module.exports = router;