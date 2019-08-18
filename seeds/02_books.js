exports.seed = async knex => {
    await knex('books').del()
    return knex('books').insert([
        { name: 'The Shining', author_id: 1 },
        { name: 'Harry Potter and the Sorcerer\'s Stone', author_id: 2 }
    ]);
};
