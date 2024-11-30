const {isUtf8}=require("buffer");

const fs = require ("fs");

const readfile =()=>{
fs.readFile("a.txt","utf-8",(err,data)=>{

console.log(data);
});

};


readfile();
