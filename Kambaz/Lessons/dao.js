import model from "./model.js"

export function findLessonsForModule(moduleId) {
    return model.find({ module: moduleId });
};