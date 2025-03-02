const express = require("express");
const fs = require("fs");
const fastCsv = require("fast-csv");
const mongoose = require("mongoose");
const Registration = require("../models/Registration"); // Import Registration model
const Contact = require("../models/Contact"); // Import Contact model

const router = express.Router();

// 📌 Export Registration Data to CSV
router.get("/export/registrations", async (req, res) => {
  try {
    const registrations = await Registration.find().lean();

    if (registrations.length === 0) {
      return res.status(404).json({ message: "No registration data available." });
    }

    const csvStream = fastCsv.format({ headers: true });
    const writableStream = fs.createWriteStream("registrations.csv");

    csvStream.pipe(writableStream);
    registrations.forEach((record) => csvStream.write(record));
    csvStream.end();

    writableStream.on("finish", () => {
      res.download("registrations.csv", "registrations.csv");
    });
  } catch (error) {
    console.error("Error exporting registrations:", error);
    res.status(500).json({ error: "Failed to export registration data" });
  }
});

// 📌 Export Contact Form Data to CSV
router.get("/export/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().lean();

    if (contacts.length === 0) {
      return res.status(404).json({ message: "No contact data available." });
    }

    const csvStream = fastCsv.format({ headers: true });
    const writableStream = fs.createWriteStream("contacts.csv");

    csvStream.pipe(writableStream);
    contacts.forEach((record) => csvStream.write(record));
    csvStream.end();

    writableStream.on("finish", () => {
      res.download("contacts.csv", "contacts.csv");
    });
  } catch (error) {
    console.error("Error exporting contacts:", error);
    res.status(500).json({ error: "Failed to export contact data" });
  }
});

module.exports = router;