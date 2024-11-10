const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const dotenv = require('dotenv');
const User = require('./models/taskmodels'); // Assuming you have a User model
const taskRoute = require('./routes/taskroute'); // Task API routes
dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Set the backend port

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit the process in case of a failure
  }
};

// Connect to MongoDB
connectDB();

// Use the task routes (API)
app.use('/api/tasks', taskRoute);

// User registration route
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Login route for authentication
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Serve React frontend (production)
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app's build folder
  app.use(express.static(path.join(__dirname, 'frontend', 'src')));

  // Fallback route to serve the React app (index.html)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'src', 'App.js'));
  });
} else {
  // For development, React's development server will handle the requests
  // You can set up a proxy in the frontend's package.json for this
  app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Click here to open: http://localhost:${PORT}`);
});
