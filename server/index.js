/*
 * Filename: Blog website
 * Created Date: Friday, June 9th 2023, 10:44:25 pm
 * Author: Sowmiya-Ramesh
 */
const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
});


// connect with browser
app.use("/", (req,res)=>{
    console.log("main url")
})

app.listen("5000",()=>{
console.log("hello success")})

