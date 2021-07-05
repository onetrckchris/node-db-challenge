exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {description: 'Get some code done for the application.', note: 'Make it a lot of code.', completed: true, project_id: 1},
        {description: 'Run and get some coffee for the team.', completed: true, project_id: 1},
        {description: 'Make this work somehow.', completed: false, project_id: 2},
        {description: 'Add shopping capablities within the application.', note: 'Figure out what people could even shop for', completed: false, project_id: 3},
        {description: 'Do the thing where your friends have easier access to you.', completed: true, project_id: 3},
        {description: 'Talk to higher ups to get this other thing done.', completed: false, project_id: 3},
      ]);
    });
};
