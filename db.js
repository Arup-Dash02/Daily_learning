/*
Todo{
    title:string,
    description:string,
    complete:boolean
}
*/
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Arup_Dash:dash%40232001@cluster0.7uzfzby.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
