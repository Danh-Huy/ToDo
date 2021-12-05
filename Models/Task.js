const mongoose = require("mongoose")
const { Schema } = mongoose
mongoose.connect('mongodb://localhost:27017/todo_db')
.catch(error => handleError(error));

const TaskSchema = new Schema({
  name: String,
  date: Date,
});

const Task = mongoose.model('Task',TaskSchema)

module.exports = Task