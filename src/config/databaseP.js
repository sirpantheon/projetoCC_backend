const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect("mongodb+srv://maximuzz:123456cc@cluster0.ynpya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })

module.exports = mongoose