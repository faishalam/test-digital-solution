const { Car } = require('../models')
const { Op } = require('sequelize')

class CarController {
    static async getAll(req, res) {
        try {
            const { search } = req.query
            console.log(search)
            let response;

            if (search) {
                response = await Car.findAll({
                    where: {
                        merk: {
                            [Op.iLike]: `%${search}%`
                        }
                    }
                })
                return res.status(200).json(response)
            }

            response = await Car.findAll()
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }

    static async getCarById(req, res) {
        try {
            const { id } = req.params
            const find = await Car.findOne({ where: { id } })
            if (!find) {
                return res.status(404).json({ message: "Car not found" })
            }
            res.status(200).json(find)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async addCar(req, res) {
        try {
            const { merk, jenis, stock, harga, keterangan } = req.body
            const newCar = await Car.create({
                merk,
                jenis,
                stock,
                harga,
                keterangan
            })
            res.status(201).json(newCar)
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async deleteCar(req, res) {
        try {
            const { id } = req.params
            const find = await Car.findOne({ where: { id } })
            if (!find) {
                return res.status(404).json({ message: "Car not found" })
            }

            await find.destroy({ where: { id } })
            res.status(200).json({ message: "Car deleted" })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async updateCar(req, res) {
        try {
            const { id } = req.params
            const { merk, jenis, stock, harga, keterangan } = req.body
            const find = await Car.findOne({ where: { id } })
            if (!find) {
                return res.status(404).json({ message: "Car not found" })
            }
            const update = await Car.update({
                merk,
                jenis,
                stock,
                harga,
                keterangan
            }, { where: { id } })
            res.status(200).json({ message: "Car updated" })
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

module.exports = CarController