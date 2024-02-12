const express = require ("express")
const route = express.Router()
const apiRoutes = require("../routes/api")

const api ="/api/v1"
route.use(api,apiRoutes)

route.use(api,(req,res)=>res.send("Your api is not found"))

module.exports = route