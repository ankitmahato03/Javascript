const express = require("express");
const app = express();

app.use(express.json());
let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

const globalMiddware = (req, res, next) => {
  const userId = req.headers["user-id"];
  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
    if (numberOfRequestsForUser[userId] > 5) {
      res.status(404).json({
        massage: "you are not alloude",
      });
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
};

app.use(globalMiddware);

app.get("/route", (req, res) => {
  res.status(200).json({
    massage: "you are doing good",
  });
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});
// error handling middleware

app.use((err, req, res, next) => {
  res.status(400).json({
    massage: "frist you go have to clean your mouth and come back",
  });
});

app.listen(3000);
