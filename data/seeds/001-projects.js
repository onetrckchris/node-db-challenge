exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {name: 'Mobalytics', description: 'Statistics for your favorite MOBA games.', completed: true},
        {name: 'Face Generator', description: 'Generate faces on the fly.', completed: false},
        {name: 'Facebook', description: 'Social app to talk to your friends.', completed: true}
      ]);
    });
};
