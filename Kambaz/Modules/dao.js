import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findModulesForCourse(courseId) {
    const { modules } = Database;
    return modules.filter((module) => module.course === courseId);
};
export function createModule(module) {
    const newModule = { ...module, _id: uuidv4() };
    Database.modules = [...Database.modules, newModule];
    return newModule;
};
export function updateModule(moduleId, moduleUpdates) {
    const { modules } = Database;
    const mod = modules.find((m) => m._id === moduleId);
    if (!mod) return null;
    Object.assign(mod, moduleUpdates);
    return mod;
}
export function deleteModule(moduleId) {
    const { modules } = Database;
    Database.modules = modules.filter((module) => module._id !== moduleId);
};