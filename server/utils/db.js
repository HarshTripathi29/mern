const mongoose = require("mongoose");

const URI = "mongodb+srv://harshtripathi042:harsh123@cluster0.etqbz6r.mongodb.net/mern_stack";

const connectDb = async()=>{
    try{
        await(mongoose.connect(URI));
        console.log("connection to db successfull");
    }
    catch (error){
        console.log("connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;