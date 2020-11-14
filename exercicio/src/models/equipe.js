const mongoose = require("mongoose");

const equipeSchema = new mongoose.Schema({
    id: { type: Number },
    nome: { type: String },
    dataNascimento: { type: String },
    signoSol: [{ 
        nome: { type: String },
        elemtento: { type: String },
        tipo: { type:: String },
        _id: 0
    }],
    statusAtiva: { type: Boolean },

},{
    versionKey: true
})

const equipe = mongoose.model("equipe", equipeSchema)

module.exports = equipe