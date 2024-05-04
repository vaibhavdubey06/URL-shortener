const mongoose=require("mongoose");


const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/youtube`)
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch(error){
        console.log("MONGODB Connection Failed",error);
        process.exit(1);
    }
    
}
module.exports=connectDB;
