const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema({
    id: { type: Number },
    titulo: { type: String },
    autoria: { type: String },
    editora: [{ 
        nome: { type: String },
        numeroDeLivrosCadastrados: { type: String },
        _id: 0
     }],
    categoria: { type: Array, default: [] },
    emEstoque: { type: Boolean }
}, {
    versionKey: true
})

const livros = mongoose.model("livros", livrosSchema)

module.exports = livros