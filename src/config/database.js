const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.MONGODB_LOCAL, { useNewUrlParser: true })

module.exports = mongoose