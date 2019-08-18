const router = require('express').Router();
const booksController = require('../controllers/booksController');

router.get('/', booksController.getAll);
router.get('/:id', booksController.get);
router.post('/', booksController.create);
router.delete('/:id', booksController.delete);

module.exports = router;