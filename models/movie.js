const { model, Schema } = require('mongoose')

const MovieSchema = new Schema({
    name: String,
    genre: String,
    directorId: String
})

module.exports = model('Movie', MovieSchema)