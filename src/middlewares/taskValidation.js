const taskModel = require('../models/taskModel')
const { isPast } = require('date-fns')

const taskValidation = async(req, res, next) => {

    const {
        type,
        nome,
        registro,
        especialidade,
        entrega,
        macaddress,
        devolucao,
        privativo,
        chave,
        descricao,
    } = req.body

    if (!nome)
        return res.status(400).json({ errors: "Nome é Um Campo Obrigatorio" })
    else if (!registro)
        return res.status(400).json({ errors: "Registro é Um Campo Obrigatorio" })
    else if (!especialidade)
        return res.status(400).json({ errors: "Especialidade é Um Campo Obrigatorio" })
    else if (isPast(new Date(entrega)))
        return res.status(400).json({ errors: "Data Invalida (passado))" })
    else {
        next()
    }

}

module.exports = taskValidation