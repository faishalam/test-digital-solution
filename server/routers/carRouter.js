const express = require('express')
const CarController = require('../controllers/carController')
const carRouter = express.Router()

carRouter.get("/car", CarController.getAll)
carRouter.post("/car", CarController.addCar)
carRouter.get("/car/:id", CarController.getCarById)
carRouter.delete("/car/:id", CarController.deleteCar)
carRouter.put("/car/:id", CarController.updateCar)

module.exports = carRouter