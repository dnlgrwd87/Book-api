const Knex = require('knex');
const connection = require('../knexfile').development;
const { Model } = require('objection');
const Author = require('./Author');

Model.knex(Knex(connection));

class Book extends Model {
    static get tableName() {
        return 'books'
    }

    static get relationMappings() {
        return {
            books: {
                relation: Model.BelongsToOneRelation,
                modelClass: Author,
                join: {
                    from: 'authors.id',
                    to: 'books.author_id'
                }
            }
        }
    }
}

module.exports = Book;