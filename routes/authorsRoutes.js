const router = require('express').Router();
const authorsController = require('../controllers/authorsController');

router.get('/', authorsController.getAll);
router.get('/:id', authorsController.get);
router.get('/:id/books', authorsController.getBooks);
router.post('/', authorsController.create);
router.delete('/:id', authorsController.delete);

module.exports = router;