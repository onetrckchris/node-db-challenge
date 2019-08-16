const router = require('express').Router();
const Projects = require('./projects-model');

// ---------------------------------------------------------------------
// ------------------------ GENERAL ENDPOINTS --------------------------
// ---------------------------------------------------------------------

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.getProject(req.params.id);
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: "Problem when getting project." });
    }
});

router.post('/:project_id/resources/:resource_id', async (req, res) => {
    try {
        const projectResource = await Projects.insertProjectResource(req.body);
        res.json(projectResource);
    } catch (err) {
        res.status(500).json({ error: "Problem when inserting resource into project." });
    }
});

// ---------------------------------------------------------------------
// ----------------------- RESOURCE ENDPOINTS --------------------------
// ---------------------------------------------------------------------

router.get('/resources', async (req, res) => {
    try {
        const resources = await Projects.getResources();
        res.json(resources);
    } catch (err) {
        res.status(500).json({ error: "Problem when getting resources." });
    }
});

router.post('/resources', async (req, res) => {
    try {
        const resource = await Projects.insertResource(req.body);
        res.json(resource);
    } catch (err) {
        res.status(500).json({ error: "Problem when creating a resource." });
    }
})

// ---------------------------------------------------------------------
// ----------------------- PROJECT ENDPOINTS ---------------------------
// ---------------------------------------------------------------------

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: "Problem when getting projects." });
    }
});

router.post('/', async (req, res) => {
    try {
        const project = await Projects.insertProject(req.body);
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: "Problem when creating project." });
    }
});

// ---------------------------------------------------------------------
// ------------------------- TASK ENDPOINTS ----------------------------
// ---------------------------------------------------------------------

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Projects.getTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Problem when getting tasks." });
    }
});

router.post('/tasks', async (req, res) => {
    try {
        const task = await Projects.insertTask(req.body);
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: "Problem when creating task." });
    }
});

module.exports = router;