/*
 * File: User.js
 * Project: <<Blog>>
 * File Created: Saturday, 10th June 2023 9:21:46 am
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 10th June 2023 10:33:44 am
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    profileImg:{
        type: String,
        default:''
    }
},{timestamps: true})

module.exports = mongoose.model("User", UserSchema)

//deafult because profile image is not mandatory
// time stamps will provide updatedAt and createdAt times