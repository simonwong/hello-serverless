require('dotenv').config()
require('./model/db')

const BooksModel = require('./model/books')
const BooksController = require('./controller/books')

const book = new BooksController(BooksModel)

module.exports = {
  create: event => book.create(event),
  update: event => book.update(event),
  find: () => book.find(),
  deleteOne: event => book.deleteOne(event),
}
