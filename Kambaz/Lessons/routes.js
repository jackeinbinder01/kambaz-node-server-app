import * as lessonsDao from "./dao.js";

export default function LessonRoutes(app) {

    app.get("/api/modules/:moduleId/lessons", async (req, res) => {
        const { moduleId } = req.params;
        const lessons = await lessonsDao.findLessonsForModule(moduleId);
        res.json(lessons);
    });
}
