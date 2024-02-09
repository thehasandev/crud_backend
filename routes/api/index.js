const express = require ("express")
const route = express.Router()
const crudRoutes = require("../api/crudRoutes")

route.use("/crudroutes",crudRoutes)

module.exports = route