import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";

export default function CourseRoutes(app) {
    app.get("/api/courses", (req, res) => {
        const courses = dao.findAllCourses();
        res.send(courses);
    });
    app.delete("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        const status = dao.deleteCourse(courseId);
        res.send(status);
    });
    app.post("/api/courses", (req, res) => {
        const newCourse = dao.createCourse(req.body);
        res.json(newCourse);
    });
    app.put("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const status = dao.updateCourse(courseId, courseUpdates);
        if (!status) {
            res.status(404).send({ error: "Course not found." });
            return;
        }
        res.send(status); 
    });
    app.get("/api/courses/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const modules = modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    });
    app.post("/api/courses/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
        };
        const newModule = modulesDao.createModule(module);
        res.send(newModule);
    });
    app.post("/api/courses/:courseId/enroll", (req, res) => {
        const { courseId } = req.params;
        const { userId } = req.body;
        enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.sendStatus(200);
    });
    app.post("/api/courses/:courseId/unenroll", (req, res) => {
        const { courseId } = req.params;
        const { userId } = req.body;
        enrollmentsDao.unEnrollUserFromCourse(userId, courseId);
        res.sendStatus(200);
    });
    app.get("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    });

}