const express = require('express');
const Task = require('../models/taskmodels'); // Import Task model

const router = express.Router();

// POST /api/tasks - Create a new task
router.post('/tasks', async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const newTask = new Task({ title, description, completed });
    await newTask.save();
    res.status(201).json(newTask); // Respond with the created task
  } catch (err) {
    res.status(400).json({ message: 'Failed to create task', error: err.message });
  }
});

// GET /api/tasks - Retrieve all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // Get all tasks from the database
    res.status(200).json(tasks); // Respond with the list of tasks
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks', error: err.message });
  }
});

// PUT /api/tasks/:id - Update a task by ID
router.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(updatedTask); // Respond with the updated task
  } catch (err) {
    res.status(400).json({ message: 'Failed to update task', error: err.message });
  }
});

// DELETE /api/tasks/:id - Delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' }); // Respond with success message
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task', error: err.message });
  }
});

module.exports = router;
