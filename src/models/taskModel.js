const mongoose = require('../config/database')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    type: { type: Number, required: true },
    nome: { type: String, required: true },
    registro: { type: Number, required: true },
    especialidade: { type: String, required: true },
    entrega: { type: Date, default: Date.now },
    macaddress: { type: String },
    devolucao: { type: Boolean, default: false },
    privativo: { type: String },
    chave: { type: Number },
    descricao: { type: String }
});

module.exports = mongoose.model('task', taskSchema)