import { model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export function findModulesForCourse(courseId) {
    return model.find({ course: courseId });
};

export function createModule(module) {
    const newModule = { ...module, _id: uuidv4() };
    return model.create(newModule);
};
export function updateModule(moduleId, moduleUpdates) {
    return model.updateOne({ _id: moduleId }, moduleUpdates);
}
export function deleteModule(moduleId) {
    return module.deleteOne({ _id: moduleId});
};