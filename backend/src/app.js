//required modules
const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.json({ message: 'IMS backend is running' });
});

//health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

//echo route to test POST requests
app.post('/echo', (req, res) => {
  res.json({ body: req.body });
});

//export app for server.js
module.exports = app;