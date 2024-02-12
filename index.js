const express = require('express')
const mongodbConfig = require('./dbConfig/mongodbConfig')
const cors = require('cors') 

const route = require ("./routes")

const app = express()

// MiddleWire 
app.use(express.json())
app.use(cors())
mongodbConfig()


app.use(route)
app.use((req,res)=>res.send("Api is Not Found"))

app.listen(8000,()=>{
    console.log("Port is Connect");
})
