const validUser =(req,res,next)=>{
    if(req.headers.authorization=="123456"){
        next()
    }else{
        res.send("You are not valid user")
    }
}
module.exports = validUser