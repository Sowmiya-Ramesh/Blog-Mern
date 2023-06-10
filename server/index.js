/*
 * File: index.js
 * Project: <<Blog>>
 * File Created: Friday, 9th June 2023 10:44:25 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 10th June 2023 9:58:38 am
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
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

