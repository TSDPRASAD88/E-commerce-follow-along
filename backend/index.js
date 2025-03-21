const express = require('express');
const userRouter=require("./controller/userRouter");
const app = express();
app.use(express.json());
const connect = require('connect');
connect();

const productRouter=require("./controller/userRouter");
const mongoose=require("mongoose");

const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");

app.use(cors());
app.use("/product",productRouter);

app.get('/',(req,res)=>{
    try{
        res.status(200).send({message:"This is Ecommerce - code - along - Backend"})
    }catch(err){
        res.status(200).send({message: "something went wrong"})
    }
})

app.use("/user",userRouter)


app.listen(8000,async()=>{
    try{
      await connect();
      console.log('server is connected');
    }catch(err){
    console.log('server is not connected', error);
    }
})