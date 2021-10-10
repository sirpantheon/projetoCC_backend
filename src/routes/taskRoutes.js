const express = require("express")
const router = express.Router();

const taskController = require("../controllers/taskController")
const puerpera = require("../controllers/taskControllerP")
const taskValidator = require("../middlewares/taskValidation")

router.get('/task')

router.post('/', taskValidator, taskController.create)
router.put('/:id', taskValidator, taskController.update)
router.get('/:id', taskController.show)
router.delete('/:id', taskController.delete)
router.put('/:id/:devolucao', taskController.devolucao)


router.get('/filter/all/:macaddress', taskController.all)
router.get('/filter/late/:macaddress', taskController.late)
router.get('/filter/today/:macaddress', taskController.today)

router.get('/filter/:type/:macaddress', taskController.type)


//puerperas----------------------------------------------------

router.post('/puerpera', puerpera.create)
router.get('/puerpera/all/:macaddress', puerpera.all)
router.delete('/puerpera/:id', puerpera.delete)
router.get('/puerpera/:id', puerpera.show)
router.put('/puerpera/:id', puerpera.update)


module.exports = router