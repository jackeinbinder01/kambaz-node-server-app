import mongoose from "mongoose";

const assignmentsSchema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        course: { type: String, ref: "CourseModel"},
        available: String,
        due: String,
        available: String,
        due: String,
        available_until: String,
        points: Number,
        description: String,
    },
    { collection: "assignments" }
);
export default assignmentsSchema;