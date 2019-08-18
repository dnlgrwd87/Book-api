const Author = require('../models/Author');
const Book = require('../models/Book');

module.exports.getAll = async (req, res) => {
    const query = Author.query();
    if (req.query.books) {
        await query.eager('books');
    }
    const authors = await query;
    res.status(200).json(authors);
}

module.exports.get = async (req, res) => {
    const author = await Author.query().findById(req.params.id);
    if (req.query.books) {
        await author.$relatedQuery('books');
    }
    res.status(200).json(author);
}

module.exports.getBooks = async (req, res) => {
    const books = await Book.query().where('author_id', req.params.id);
    res.status(200).json(books);
}

module.exports.create = async (req, res) => {
    const author = await Author.query().insert(req.body);
    res.status(200).json(author);
}

module.exports.delete = async (req, res) => {
    await Author.query().deleteById(req.params.id);
    res.json({})
}