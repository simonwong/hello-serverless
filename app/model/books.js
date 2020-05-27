const mongoose = require('mongoose')

const BooksSchema = new mongoose.Schema({
  name: String,
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})


// serverless-offline 运行多次调用，会报错 `OverwriteModelError: Cannot overwrite `Books` model once compiled.`
// 用下面这种方式保证只实例化一次。或者 serverless offline 加上 --skipCacheInvalidation 参数跳过 require 缓存无效操作
module.exports = mongoose.models.Books || mongoose.model('Books', BooksSchema, process.env.DB_BOOKS_COLLECTION)
