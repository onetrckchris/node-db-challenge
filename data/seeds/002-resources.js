exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {name: 'Board Room', description: 'A room in which the big people talk.'},
        {name: 'Visual Studio Code', description: 'An awesome code editor.'},
        {name: 'SQLite3', description: 'A DB manager of some sort, I think.'},
        {name: 'ReactJS', description: 'A JavaScript library created by Facebook.'}
      ]);
    });
};
