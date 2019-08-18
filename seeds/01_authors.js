exports.seed = async knex => {
    console.log('running authors seed');
    await knex('authors').del();
    return knex('authors').insert([
        { id: 1, name: 'Stephen King', age: 71 },
        { id: 2, name: 'J. K. Rowling', age: 54 },
        { id: 3, name: 'Dr. Seuss' }

    ]);
};
