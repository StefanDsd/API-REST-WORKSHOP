require("dotenv").config();

const express = require("express");

const { server_port } = process.env;

const app = express();

app.get("/",(req,res) => {
    res.send("Welcome to the main route");
})

app.get("/products",(req,res) => {
    res.send("products route");
})


console.log()

app.listen(server_port, (e) => {
    if(e) {
        console.log(e);
    } else {
        console.log("listening to port", server_port);
    }
});

 