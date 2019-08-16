const db = require('../data/db-config');

module.exports = {
    getProject,
    insertProjectResource,
    getResources,
    insertResource,
    getProjects,
    insertProject,
    getTasks,
    insertTask
}

// ---------------------------------------------------------------------
// ------------------------- GENERAL HELPERS ---------------------------
// ---------------------------------------------------------------------

function getProject(project_id) {
    return db('projects')
        .where({ id: project_id })
        .first()
        .then(project => {
            return db('tasks as t')
                .select('t.id', 't.description', 't.note', 't.completed')
                .where({ project_id })
                .then(tasks => {
                    return db('project-resources as pr')
                        .join('projects as p', 'pr.project_id', 'p.id')
                        .join('resources as r', 'pr.resource_id', 'r.id')
                        .select('r.id', 'r.name', 'r.description')
                        .where('p.id', project_id)
                        .then(resources => {
                            return { ...project, tasks: tasks, resources, resources }
                        })
                })
        })
};

function insertProjectResource(projectResource) {
    return db('project-resources')
        .insert(projectResource);
};

// ---------------------------------------------------------------------
// ------------------------ RESOURCE HELPERS ---------------------------
// ---------------------------------------------------------------------

function getResources() {
    return db('resources');
};

function insertResource(resource) {
    return db('resources')
        .insert(resource);
};

// ---------------------------------------------------------------------
// ------------------------- PROJECT HELPERS ---------------------------
// ---------------------------------------------------------------------

function getProjects() {
    return db('projects');
};

function insertProject(project) {
    return db('projects')
        .insert(project);
};

// ---------------------------------------------------------------------
// -------------------------- TASK HELPERS -----------------------------
// ---------------------------------------------------------------------

function getTasks() {
    return db('tasks');
};

function insertTask(task) {
    return db('tasks')
        .insert(task);
}