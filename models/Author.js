const Knex = require('knex');
const connection = require('../knexfile').development;
const { Model } = require('objection');

Model.knex(Knex(connection));

class Author extends Model {
    static get tableName() {
        return 'authors'
    }

    static get relationMappings() {
        const Book = require('./book');

        return {
            books: {
                relation: Model.HasManyRelation,
                modelClass: Book,
                join: {
                    from: 'books.author_id',
                    to: 'authors.id'
                }
            }
        }
    }
}

module.exports = Author;