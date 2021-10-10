const express = require('express')
const cors = require('cors')
const server = express()
const dotenv = require('dotenv')


server.use(cors())
server.use(express.json())

const TaskRouter = require('./routes/taskRoutes')


server.use('/task', TaskRouter)


dotenv.config()

server.listen(process.env.PORT)
