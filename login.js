// const mysql = require("mysql");

// const express=require("express");
// const app=express();


// const connection =mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root",
//     database:"coinbase"
// });

// connection.connect(function(error){
//     if(error)throw error
// else console.log("connected to the database successfully")
// });



// app.get("/",function(req,res){
//     res.sendFile(__dirname+"index.html");
// })

// app.listen(4500);
const mysql = require("mysql");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "coinbase"
});

connection.connect(function (error) {
    if (error) throw error;
    else console.log("Connected to the database successfully");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); // Add a forward slash before "index.html"
});

app.listen(4500, () => {
    console.log('Server is running on http://localhost:4500');
});
