const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth", router);

// app.get("/", (req,res)=>{
//     res.send("welcome to the server");
// })

// app.get("/register",(req, res)=>{
//     res.send("welcome to the registration page");
// })

const port = 3000;

app.listen(port, ()=>{
    console.log(`server is running at  ${port}`);
});