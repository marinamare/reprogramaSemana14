const mongoose = require("mongoose");
const Schema = mongoose.Schema

const equipeSchema = new Schema({
    id: { type: Number },
    nome: { type: String },
    dataNascimento: { type: String },
    statusAtiva: { type: Boolean }

},{
    versionKey: false
})

const equipe = mongoose.model("equipe", equipeSchema)

module.exports = equipe
