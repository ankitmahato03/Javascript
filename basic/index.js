const express = require("express");
const app = express();

app.get("/he", (req, res) => {
  const userName = req.header.userName;
  const userPass = req.header.userPass;
  const kidneyId = req.query.kidneyId;
  if (userName === "ankit" && userPass === "pass") {
    if (kidneyId == 1 || kidneyId == 2) {
      res.json({
        massage: "your kidney is fine ",
      });
    } else {
      res.json({
        massage: "please enter a valid input",
      });
    }
  }
  //   res.status(401).json({
  //     massage: "somehting happensds with your inputs",
  //   });
  res.json({
    massage: "wow your kidney is fine ",
  });
});
app.listen(3000);
