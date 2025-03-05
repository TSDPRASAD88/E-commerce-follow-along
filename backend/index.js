const express = require('express');
const userRouter=require("./controller/userRouter");
const app = express();
const connect = require('connect');
connect();
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