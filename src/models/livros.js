const mongoose = require('mongoose');
const Schema = mongoose.Schema

let livrosSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    titulo: { type: String },
    autoria: { type: String },
    editora: { type: String },
    categoria: [{ type: String }],
    emEstoque: { type: Boolean }
}, {
    versionKey: false
})

const livros = mongoose.model("livros", livrosSchema)

module.exports = livros