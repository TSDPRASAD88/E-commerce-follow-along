const express=require("express");

const productModel=require("../models/productModel")

const produtRouter=express.Router();
const productImage=require("../middlewares/multer");

productRouter.post("/addproduct",(req,res,next)=>{
   productImage.array("images",6)(req.res,(err)=>{
    if(arr){
        return res.status(500).send({msg:"something went wrong while uploading images"});
    }
   })
},async(req,res)=>{
try {
    const {title,description,price} =req.body;
    if(!title || !description || !price){
        return res.status(404).send({msg:"please fill all fields"});
    }

    const images=req.file;
    

} catch (error) {
    return res.status(500).send({msg:"something went wrong",error});
}
})