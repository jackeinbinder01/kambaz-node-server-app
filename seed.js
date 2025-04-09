import mongoose from "mongoose";
import usersModel from "./Kambaz/Users/model.js";
import assignments from "./Kambaz/Database/assignments.js"
import courses from "./Kambaz/Database/courses.js"
import modules from "./Kambaz/Database/modules.js"
import users from "./Kambaz/Database/users.js"

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz"


const refresh = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING);

        await usersModel.deleteMany({});
        // await assignmentsModel.insertMany(assignments);
        // await coursesModel.insertMany(courses);
        // await modulesModel.insertMany(modules);
        await usersModel.insertMany(users);

        console.log("Refresh success");
        process.exit();
    } catch (err) {
        console.error("Failed to refresh db: ", err);
        process.exit(1);
    }
};

refresh();
