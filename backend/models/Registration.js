const mongoose = require("mongoose");

// Define the Registration schema
const RegistrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  graduationYear: { type: Number, required: true },
}, { timestamps: true }); // Adds createdAt & updatedAt timestamps

// Create the Registration model
const Registration = mongoose.model("Registration", RegistrationSchema);

module.exports = Registration;