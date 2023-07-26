const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory storage for tasks
const tasks = [];

// Get all tasks
app.get('/todos', (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post('/todos', (req, res) => {
  const new
