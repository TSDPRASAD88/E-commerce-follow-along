const express = require("express");

const app=express();

app.get("/",(request,response)=>{
    try{
      response.status(200).send({msg:"This is E-commerce code along"})
    }catch(error){
        response.status(500).send({message:"error occured"})
    }
})

app.listen(3000,()=>{
    try{
        console.log("Connected to server succsefully");
    } catch(error) {
       console.log(error);
    }
})