 const Todo = require('../models/todo.models');
 
// api for switching users 
// const switchh  =async (req,res)=>{
 
//    try {
    
//    const filter = {};

//     if (req.query.assignedUsers) {
      
//      filter.assignedUsers = req.query.assignedUser;
    

//       // Mongoose: match any user in the array
//       // filter.assignedUsers = { $in: users };
//     }

//     /* 2️ Query MongoDB */
//     const todos = await Todo.find(filter).lean() 
     

//     /* 3️ Respond */
//     res.status(200).json(todos);

//    } catch (error) {
//     res.status(500).json({ message: error.message });
//    }
// }


// Get all todos
const getAllTodos = async (req, res) => {
    
  try {
    

const filter = {};                // add keys only if the client sent them

    if (req.query.priority) {
      filter.priority = req.query.priority.toLowerCase(); // high | medium | low
    }

    if (req.query.completed === 'true' || req.query.completed === 'false') {
      filter.completed = req.query.completed === 'true';
    }

    if (req.query.tag) {
      filter.tags = req.query.tag;    // exact match inside tags[]; for multiple tags use: { $in: req.query.tag.split(',') }
    }

    if (req.query.assignedUser) {
      filter.assignedUsers = req.query.assignedUser;
    }

    if (req.query.q) {                // free‑text search in title or description
      const r = new RegExp(req.query.q, 'i');
      filter.$or = [{ title: r }, { description: r }];
    }

//  const todos = await Todo.find(filter).lean();





    const page = parseInt(req.query.page) || 1;       
    const limit = parseInt(req.query.limit) ;    
    const skip = (page - 1) * limit;
    // const todos =await Todo.find()
    //  .skip(skip)
    //   .limit(limit)
    //   .sort({ createdAt: -1 }); 

   const [todos, total] = await Promise.all([
      Todo.find(filter).skip(skip).limit(limit).lean(),
      Todo.countDocuments(filter)
    ]);



    res.status(200).json(todos);
  }
   catch (error) {
    res.status(500).json({ message: error.message }); 
  } 
};

// Get a single todo by ID
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  console.log(req.body)
  try {
    const newTodo = new Todo({
      ...req.body,
      
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update a specifc todo by their id and add notes
const addNotes = async (req,res)=>{
 
   try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  addNotes,
  
};  