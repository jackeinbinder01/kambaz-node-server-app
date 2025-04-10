import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    number: String,
    credits: Number,
    description: String,
},
{ collection: "courses" }
);
export default courseSchema;