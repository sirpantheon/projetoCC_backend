const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect("mongodb+srv://maximuzz:bgDd0FjWjhbYB9WK@cluster0.ynpya.mongodb.net/controleCC?retryWrites=true&w=majority", { useNewUrlParser: true })

module.exports = mongoose