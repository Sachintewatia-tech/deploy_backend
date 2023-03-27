const mongoose = require("mongoose");
require("dotenv").config();
const connect = mongoose.connect(process.env.url);
// const connect = mongoose.connect("mongodb://127.0.0.1:27017/loginusers");

module.exports = {
    connect
}