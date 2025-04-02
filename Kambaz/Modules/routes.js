import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {

    app.post("/api/courses/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
          };
      
        const newModule = modulesDao.createModule(module);
        res.send(newModule);
    });

    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        if (!status) {
            res.status(404).send({ error: "Module not found."});
            return;
        }
        res.send(status);
    });

    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
    });
}