const mongoose = require("mongoose");
// const { string, boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://ankitmahato768:Ankit%408016@cluster0.3komawu.mongodb.net/TODOS"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
  Todos,
};
