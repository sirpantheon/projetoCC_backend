const mongoose = require('../config/databaseP')

const Schema = mongoose.Schema

const puerpera = new Schema({
    nome: { type: String, required: true },
    registro: { type: Number, required: true },
    data: { type: Date, default: Date.now },
    macaddress: { type: String },
    descricao: { type: String },
    leito: { type: String },
});

module.exports = mongoose.model('puerpera', puerpera)