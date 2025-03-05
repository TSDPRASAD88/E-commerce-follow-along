const express =require("express");

const userRouter=express.Router();

const uploadUSerImage=require("../middlewares/multer")

const {userModel}=require("../models/userModel");

userRouter.post("/signup",uploadUSerImage.single("image"),async(req,res)=>{
    try{
     const {name,email,password}=req.body;
     if(name!="" || email!="" || password!=""){
        return res.status(400).send({message:"All fields are required"});
     }
      const user=await userModel.findOne({email:email});
      if(user){
        return res.status(200).send({message:"user already exist"});
      }
      
      const newUser=await userModel.insertOne({name,email,password});

      return res.status(200).send({message:"user register successfully"});

    }catch(error){
        return res.status(500).send({message:"Something went wrong"});
    }
})


userModel.post("./login",async(req,res)=>{
    try{
      const {email,password}=req.body;
      if(email!="" || password!=""){
        return res.status(400).send({message:"All fields are required"});
     }
      const user=await userModel.findOne({email:email,password:password});
      if(user){
        return res.status(200).send({message:"user already exist"});
      }
      return res.status(200).send({message:"user logged successfully"})
      
    }catch(error){
       return res.status(500).send({message:"something went wrong"});
    }
})


module.exports=userRouter;