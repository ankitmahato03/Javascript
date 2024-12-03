//You have to create a middleware for logging the number of requests on a server
const express = require("express");
const app = express();

app.use(express.json());

let requestCount = 0;

const ticketCheck = (req, res, next) => {
  const ticket = req.query.ticket;
  if (ticket <= 1) {
    next();
  } else {
    res.json({
      massage: "you are not alloud",
    });
  }
};

const serverRequestCount = (req, res, next) => {
  requestCount = requestCount + 1;
  next();
};

app.use(serverRequestCount);

app.get("/ride", ticketCheck, (req, res) => {
  res.json({
    massage: "you applid for ride one ",
  });
});
app.get("/ride2", ticketCheck, (req, res) => {
  res.json({
    massage: "you applid for ride two ",
  });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000);
