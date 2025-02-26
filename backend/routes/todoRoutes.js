// const express = require('express');
// const router = express.Router();
// const Todo = require('../models/Todo');

// // Get all todos
// router.get('/', async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Add a todo
// router.post('/', async (req, res) => {
//   const todo = new Todo({
//     title: req.body.title,
//     completed: false,
//   });
//   try {
//     const newTodo = await todo.save();
//     res.status(201).json(newTodo);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;
