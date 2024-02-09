const express = require ("express")
const { createController, deleteController, updateController } = require("../../controllers/crudControllers")
const validUser = require("../../middlewire/userMiddlewire")
const route = express.Router()

route.post("/create",validUser,createController)
route.post("/delete",deleteController)
route.post("/update",updateController)

module.exports = route