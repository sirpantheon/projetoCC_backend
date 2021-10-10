const taskModel = require('../models/taskModelP')
const { all } = require('../routes/taskRoutes')

const current = new Date()

class puerpera {

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
            .sort('created')
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

}


module.exports = new puerpera();