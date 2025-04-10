import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    module: { type: String, ref: "ModuleModel" },
},
{ collection: "lessons" }
);
export default schema;