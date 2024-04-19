const User = require("../models/user-model");

const home =async(req,res)=>{
    try{
        res.send("welcome to the server using controllers");
    }
    catch (error){
        console.log(error);
    }
}

const register =async(req, res)=>{
    try{
    console.log(req.body);
    const {username, email, phone, password} = req.body;
    const userExist = await User.findOne({email});
    if(userExist)
     {
        return res.json({msg : "user already exist"});
     }
     const userCreated = await User.create({ username,email, phone, password });
     res.json({msg : userCreated});

    // console.log(req.body);
    // res.send({message : req.body});
    }
    catch (error){
        console.log("internal server error");
    }
}

module.exports = {home, register}