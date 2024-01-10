const mongoose = require("mongoose");
const { boolean } = require("zod");
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://admin:admin@cluster0.vsqooox.mongodb.net/?retryWrites=true&w=majority");


const todoSchema = new Schema({
  title: String,
  discription: String,
  completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
  todo
}
