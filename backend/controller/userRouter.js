const express =require("express");
const bcrypt =require("bcryptjs")

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
      console.log(user);
      if(user){
        return res.status(200).send({message:"user already exist"});
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      
      const newUser=await userModel.insertOne({name,email,password:hash});

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


      const user=await userModel.findOne({email});
      const matchedPass= bcrypt.compareSync(password, hash); // true
      if(user && matchedPass){
        return res.status(200).send({message:"user logged successfully"});
      }
      return res.status(401).send({message:"Entered details are wrong"});
      
    }catch(error){
       return res.status(500).send({message:"something went wrong"});
    }
})


module.exports=userRouter;