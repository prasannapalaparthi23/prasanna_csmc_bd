const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

// =======================
// Add Course
// =======================

router.post("/add", async (req, res) => {
    try {

        const course = new Course(req.body);

        await course.save();

        res.status(201).json({
            success: true,
            message: "Course Added Successfully",
            data: course
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});

// =======================
// Get All Courses
// =======================

router.get("/all", async (req, res) => {

    try {

        const courses = await Course.find();

        res.status(200).json(courses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// =======================
// Get Course By ID
// =======================

router.get("/:id", async (req, res) => {

    try {

        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                message: "Course Not Found"
            });
        }

        res.status(200).json(course);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// =======================
// Update Course
// =======================

router.put("/update/:id", async (req, res) => {

    try {

        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({
                message: "Course Not Found"
            });
        }

        res.status(200).json({
            message: "Course Updated Successfully",
            data: updatedCourse
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// =======================
// Delete Course
// =======================

router.delete("/delete/:id", async (req, res) => {

    try {

        const deletedCourse = await Course.findByIdAndDelete(req.params.id);

        if (!deletedCourse) {
            return res.status(404).json({
                message: "Course Not Found"
            });
        }

        res.status(200).json({
            message: "Course Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;