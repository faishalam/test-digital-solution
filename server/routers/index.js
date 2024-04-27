const express = require('express')
const carRouter = require('./carRouter')
const router = express.Router()

router.use("/", carRouter)




module.exports = router