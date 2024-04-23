const express = require("express");
const app = express();
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const cors = require("cors");
const connectDb = require("./utils/db")
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());
//Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:5173", 
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD", 
  credentials: true, 
};
  
app.use(cors(corsOptions));

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});


// to get the json data in express app.