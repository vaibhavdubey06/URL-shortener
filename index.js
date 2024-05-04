const express=require("express");
const urlRoute=require("./routes/url");
const connectDB=require("./connect")
const app=express();
const PORT=3000;

connectDB()
.then(()=>console.log('Mongodb connected'));


app.use("/url",urlRoute);

app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`))