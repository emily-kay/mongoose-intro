const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema is a constructor

const bookSchema = new Schema ({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true}
})

module.exports = mongoose.model('Book', bookSchema); //connects to the Book collection in Mongo based on 'Book'