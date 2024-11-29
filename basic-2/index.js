const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

var users = [
  {
    name: "ankit",
    kidneys: [
      {
        name: "right",
        healthy: false,
      },
      {
        name: "left",
        healthy: true,
      },
    ],
  },
];

app.get("/route", function (req, res) {
  const ankitkidney = users[0].kidneys;
  const numberOfKidneys = ankitkidney.length;
  let numberOfGoodKidneys = 0;
  for (let i = 0; i < ankitkidney.length; i++) {
    if (ankitkidney[i].healthy) {
      numberOfGoodKidneys++;
    }
  }
  const noOfBadKidneys = numberOfKidneys - numberOfGoodKidneys;

  res.json({
    numberOfKidneys,
    numberOfGoodKidneys,
    noOfBadKidneys,
  });
});

app.post("/", (req, res) => {
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy: ishealthy,
  });

  res.json({
    massage: "your kidney is transplanted",
  });
});

app.put("/route", function (req, res) {});

app.delete("/route", function (req, res) {});

app.listen(port, () => {
  console.log(`the post is ${port}`);
});
