const dotenv = require("dotenv");
const express = require('express');

const app = express();
const mongoose = require("mongoose");
app.use(express.json());
dotenv.config({path:"./config.env"});

require("./db/conn");
app.use(require("./router/auth"));
const user = require("./model/userSchema")
 const port = process.env.PORT || 8202;




app.get('/',(req,res)=>{
    res.send("Home Page");
})


app.listen(port, (req,res)=>{
    console.log(`listen to the port of ${port}`)
})