const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017//courseTrackerDB");
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed");
        console.log(error);
    }
};

module.exports = connectDB;