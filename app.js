const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

const authorsRoutes = require('./routes/authorsRoutes');
const booksRoutes = require('./routes/booksRoutes');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);

app.listen(3000, () => {
    console.log('listening on port 3000');
})
