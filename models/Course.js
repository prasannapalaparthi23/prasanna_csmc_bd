const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    trainer: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    students: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Active"
    }
});

module.exports = mongoose.model("Course", courseSchema);