const mongoose=require("mongoose");

async function connect() {
    try{
     await mongoose.connect("mongodb+srv://prasadthamarana:prasadASDF@cluster0.9kunh.mongodb.net/")
    }catch(error){
    console.log("Mongo Db error",error);

    }
}

module.exports = connect;