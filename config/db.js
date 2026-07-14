const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://prasannapalaparthi880_db_user:pSQBq6yNyP0hFmY7@cluster0.al2sdtf.mongodb.net/");

        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
