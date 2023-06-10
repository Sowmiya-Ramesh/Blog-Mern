/*
 * File: Category.js
 * Project: <<Blog>>
 * File Created: Saturday, 10th June 2023 9:23:54 am
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 10th June 2023 10:36:41 am
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */
const mongoose = require("mongoose");

const CatergorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CatergorySchema);
