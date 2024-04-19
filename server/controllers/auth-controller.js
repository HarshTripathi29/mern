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
    res.send("welcome to the register page using controllers");
    }
    catch (error){
        console.log(error);
    }
}

module.exports = {home, register}