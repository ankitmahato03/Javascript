const express = require("express");

const app = express();
app.use(express.json());

app.post("/hand", (req, res) => {
  const kidneyId = req.body.kidneyId;
  const klength = kidneyId.length;

  res.send(`your kidney is avaible ${klength}`);
});

//global catches
app.use((err, req, res, next) => {
  res.status(404).send({
    massage: "something happens with our servers ",
  });
});

app.listen(3000);
