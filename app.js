require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
app.use(cors());

const port = process.env.PORT  || 3000;

// Redirect root to /me
app.get('/', (req, res) => {
  res.redirect('/me');
});

// /me endpoint
app.get('/me', async (req, res) => {
  try {
    // Fetch a new cat fact on each request
    const response = await axios.get('https://catfact.ninja/fact');
    const catFact = response.data.fact;

    // dynamic data
    const data = {
      status: 'success',
      user: {
        email: 'aghaulor.gift@gmail.com',
        name: 'Aghaulor Gift',
        stack: 'Node.js/Express'
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.status(200).json(data);
  } catch (error) {
	// Handle API errors
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch cat fact',
      error: error.message
    });
  }
});

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});