import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.get("/api/courses/:courseId/assignments", async (req, res) => {
            const { courseId } = req.params;
            const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
            res.json(assignments);
        });
    app.post("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
          };
      
        const newAssignment = await assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        if (!status) {
            res.status(404).send({ error: "Assignment not found."});
            return;
        }
        res.send(status);
    });
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });
    app.get("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignment = await assignmentsDao.findAssignmentById(assignmentId);
        if (!assignment) {
            res.status(404).send({ error: "Assignment not found." });
            return;
        }
        res.send(assignment);
    });
}