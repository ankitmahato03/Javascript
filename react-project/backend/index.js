const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todos } = require("./db");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      massage: "you send a wrong input",
    });
    return;
  }

  await Todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    massage: "Todo is created Successfully",
  });
});

app.get("/todos", async (req, res) => {
  const response = await Todos.find({});
  res.json({
    Courses: response,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      massage: "you send a wrong input",
    });
    return;
  }
  await Todos.updateMany(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    massage: "Todo mark as completed",
  });
});

app.listen(3000);
