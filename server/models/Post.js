/*
 * File: Post.js
 * Project: <<Blog>>
 * File Created: Saturday, 10th June 2023 9:23:12 am
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 10th June 2023 10:33:40 am
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */
const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:false
    }
}, {timestamps: true})

module.exports = mongoose.model("Post", PostSchema)