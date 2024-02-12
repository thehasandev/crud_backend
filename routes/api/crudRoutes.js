const express = require ("express")
const { createController, deleteController, updateController, allData } = require("../../controllers/crudControllers")
const validUser = require("../../middlewire/userMiddlewire")
const crudSchema = require("../../model/crudSchema")
const route = express.Router()

route.post("/create",createController)
route.post("/delete",deleteController)
route.post("/update",updateController)
route.get("/alldata",allData)

module.exports = route