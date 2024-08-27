const fs = require("fs");

let data = "\n hello from a.txt i am the new txt from a.txt";
function hellow() {
  fs.appendFile("a.txt", data, function (err) {
    if(err){
        console.log("err in append");
    }
    console.log("data added sucessfully");
  });
}

hellow();
