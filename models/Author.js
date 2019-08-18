const Knex = require('knex');
const connection = require('../knexfile').development;
const { Model } = require('objection');
const Book = require('./book');

Model.knex(Knex(connection));

class Author extends Model {
    static get tableName() {
        return 'authors'
    }

    static get relationMappings() {
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