exports.up = knex => {
    return knex.schema.createTable('books', table => {
        table.increments('id').primary();
        table.text('name').notNullable();
        table.integer('author_id').unsigned().notNullable();
        table.foreign('author_id').references('id').inTable('authors').onDelete('CASCADE');
    })
};

exports.down = knex => {
    return knex.schema.dropTable('books');
};
