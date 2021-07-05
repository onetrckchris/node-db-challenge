exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 255)
            .notNullable();
        tbl.text('description', 255);
        tbl.boolean('completed')
            .notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 255)
            .notNullable();
        tbl.text('description', 255);
    })
    .createTable('project-resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 255)
            .notNullable();
        tbl.text('note', 255);
        tbl.boolean('completed')
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
};
