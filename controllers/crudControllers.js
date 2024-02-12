const inputValidation = require("../helpers/inputValidation")
const crudSchema = require("../model/crudSchema")

const CrudSchema = require("../model/crudSchema")

const createController =(req,res)=>{
    const {name,des} = req.body
    
    
    if(inputValidation(name) && inputValidation(des)){
       const data = new CrudSchema({
        name,
        des
       })
       data.save()
       res.send("Data send")
    }else{
      res.send("Your all input is required")
    }
}

const deleteController =async(req,res)=>{
  const {id} = req.body
const data = await CrudSchema.findOneAndDelete({ _id: id })
res.send("Delete SucessFull")

}

const updateController =async(req,res)=>{
    const {id,name} = req.body
    const data = await CrudSchema.findOneAndUpdate({ _id: id },{name:name})
    res.send("Delete SucessFull")

}

const allData =async(req,res)=>{
  data = await crudSchema.find({})
  res.send(data)
}





module.exports = {createController,deleteController,updateController,allData}