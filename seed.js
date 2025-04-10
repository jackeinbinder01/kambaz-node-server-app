import mongoose from "mongoose";
import dotenv from "dotenv";

import usersModel from "./Kambaz/Users/model.js";
import coursesModel from "./Kambaz/Courses/model.js";
import enrollmentsModel from "./Kambaz/Enrollments/model.js";
import modulesModel from "./Kambaz/Modules/model.js";
import lessonsModel from "./Kambaz/Lessons/model.js";
import assignments from "./Kambaz/Database/assignments.js"
import courses from "./Kambaz/Database/courses.js"
import modules from "./Kambaz/Database/modules.js"
import lessons from "./Kambaz/Database/lessons.js"
import users from "./Kambaz/Database/users.js"
import enrollments from "./Kambaz/Database/enrollments.js";

dotenv.config();
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz"


const refresh = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING);

        await usersModel.deleteMany({});
        await coursesModel.deleteMany({});
        await enrollmentsModel.deleteMany({});
        await modulesModel.deleteMany({});
        await lessonsModel.deleteMany({});

        
        // await assignmentsModel.insertMany(assignments);
        await usersModel.insertMany(users);
        await coursesModel.insertMany(courses);
        await modulesModel.insertMany(modules);
        await lessonsModel.insertMany(lessons);
        await enrollmentsModel.insertMany(enrollments);

        console.log("Refresh success");
        process.exit();
    } catch (err) {
        console.error("Failed to refresh db: ", err);
        process.exit(1);
    }
};

refresh();
