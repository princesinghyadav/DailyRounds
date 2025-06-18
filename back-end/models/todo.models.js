
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    id:String,
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
   
   
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
     completed:Boolean,
    tags:String,
    assignedUsers:String,
    notes:String
   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel; 