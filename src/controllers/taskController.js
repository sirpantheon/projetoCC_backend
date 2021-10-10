const taskModel = require('../models/taskModel')
const { all } = require('../routes/taskRoutes')
const { startOfDay, endOfDay } = require("date-fns")

const current = new Date()

class TaskController {

    async create(req, res) {
        const task = new taskModel(req.body)
        await task
            .save()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async update(req, res) {
        await taskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async all(req, res) {
        await taskModel.find({ macaddress: { '$in': req.params.macaddress } })
            .sort('entrega')
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async show(req, res) {
        await taskModel.findById(req.params.id)
            .then(response => {
                if (response)
                    return res.status(200).json(response)
                else
                    return res.status(404).json({ error: 'Not Found' })
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async delete(req, res) {
        await taskModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async devolucao(req, res) {
        await taskModel.findByIdAndUpdate({ '_id': req.params.id }, { "devolucao": req.params.devolucao }, { new: true })
            .then(response => { return res.status(200).json(response) })
            .catch(err => { return res.status(500).json(err) })
    }

    async late(req, res) {
        await taskModel.find({
                'entrega': { '$lt': current },
                'macaddress': { '$in': req.params.macaddress },
                'devolucao': { '$in': req.params.devolucao = false }
            })
            .sort('entrega')
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async today(req, res) {
        await taskModel.find({
                'macaddress': { '$in': req.params.macaddress },
                'entrega': { '$gte': startOfDay(current), '$lte': endOfDay(current) }
            })
            .sort('entrega')
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async type(req, res) {
        await taskModel.find({
                'macaddress': { '$in': req.params.macaddress },
                'type':{ '$in': req.params.type }
            })
            .sort('entrega')
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }


}


module.exports = new TaskController();