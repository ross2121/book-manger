require("dotenv").config();
require("express-async-errors")
const cors=require("cors");
const express=require("express");
const app=express();
const connectDB = require("./db/connect");
const notFound=require("./middlewares/notfound")
// const unauthinticated=require("./middlewares")
app.use(express.json())
const jobsrouter=require("./routes/job")
app.use("/api/books",jobsrouter);
app.use(notFound);

const port=process.env.port||3000;
app.use(cors());
// app.use(cors());
const start=async()=>{
    try {
        connectDB();
         app.listen(port)
         console.log(`server is running at ${port}`)
    } catch (error) {
        console.log(error);
    }
}

start();
