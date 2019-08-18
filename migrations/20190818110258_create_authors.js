exports.up = knex => {
    return knex.schema.createTable('authors', table => {
        table.increments('id').primary();
        table.text('name').notNullable();
        table.integer('age');
    })
};

exports.down = knex => {
    return knex.schema.dropTable('authors');
};
