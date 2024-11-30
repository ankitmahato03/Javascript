const express = require("express");

const app = express();
app.use(express.json());

app.post("/hand", (req, res) => {
  const kidneyId = req.body.kidneyId;
  const klength = kidneyId.length;

  res.send(`your kidney is avaible ${klength}`);
});
app.listen(3000);
