const Book = require('../models/Book');

module.exports.getAll = async (req, res) => {
    const books = await Book.query();
    res.status(200).json(books);
}

module.exports.get = async (req, res) => {
    const book = await Book.query().findById(req.params.id);
    res.status(200).json(book);
}

module.exports.create = async (req, res) => {
    const book = await Book.query().insert(req.body);
    res.status(200).json(book);
}

module.exports.delete = async (req, res) => {
    await Book.query().deleteById(req.params.id);
    res.json({});
}