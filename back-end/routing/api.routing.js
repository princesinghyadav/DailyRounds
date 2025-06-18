 const express = require('express');
const apitodos  = express.Router();
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  addNotes,
  switchh
} = require('../controllers/todo.controller');

// Routes for CRUD operations
// to switch users 
 

// GET all todos
apitodos.get('/todos', getAllTodos); 

// GET a single todo by ID
apitodos.get('/todos/:id', getTodoById);

// POST a new todo
apitodos.post('/todos', createTodo);

// PUT/UPDATE a todo
apitodos.put('/todos/:id', updateTodo);

// patch for updating notes 
apitodos.patch('/todos/:id/notes',addNotes)

// DELETE a todo
apitodos.delete('/todos/:id', deleteTodo);


module.exports = apitodos; 