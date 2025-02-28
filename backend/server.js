const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
// app.use(cors());
app.use(cors({ origin: "*" })); // Allow all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  // console.log(`Request: ${req.method} ${req.url}`);
  // console.log('Body:', req.body);
  next();
});
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
const registrationRoutes = require('./routes/registration');
const contactRoutes = require('./routes/contact');

app.use('/api', registrationRoutes);
app.use('/api', contactRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const newRoute = require('./routes/newRoute');
// app.use('/api', newRoute);

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error("MongoDB connection error:", err));

// // Schema and Model for Registration
// const registrationSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   graduationYear: Number
// });

// const Registration = mongoose.model('Registration', registrationSchema);

// // // ✅ Test Route
// // app.get("/api/test", (req, res) => {
// //   res.json({ message: "Welcome to the Bridge Family" });
// // });

// app.get("/api/test", (req, res) => {
//   res.json({ message: "Connected to newDatabase successfully!" });
// });

// // Registration Route
// app.post('/api/register', async (req, res) => {
//   const { firstName, lastName, graduationYear } = req.body;
//   try {
//     const newRegistration = new Registration({ firstName, lastName, graduationYear });
//     await newRegistration.save();
//     res.json({ message: 'Registration successful!' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to register student' });
//   }
// });

// // Main route
// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });