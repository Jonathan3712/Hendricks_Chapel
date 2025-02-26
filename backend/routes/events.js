const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET all events

router.get("/", async (req, res) => {
  try {
    const events = await Event.find(); // Query to fetch events from DB
    res.json(events);  // Send back events if successful
  } catch (error) {
    console.error("Error fetching events:", error);  // Log the error to backend console
    res.status(500).json({ error: "Error fetching events" });  // Send error response
  }
});

module.exports = router;


// router.get("/", async (req, res) => {
//   try {
//     const events = await Event.find();
//     if (!events || events.length === 0) {
//       throw new Error('No events found');
//     }
//     res.json(events);
//   } catch (error) {
//     console.error("Error fetching events:", error); // Log detailed error
//     res.status(500).json({ error: "Error fetching events", message: error.message }); // Include the message in response
//   }
// });


// module.exports = router; // ✅ Make sure you are exporting the router
