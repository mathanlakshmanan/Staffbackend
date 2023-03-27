const mongoose = require('mongoose');
const express = require('express');
const userRoute = require('./routes/userRoute');
const app = express();
require("dotenv").config(); 


app.use(express.json());
app.use(express.urlencoded({extended:false}));
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://mathankumar:Mathanlakma5@cluster0.gdlv0c3.mongodb.net/staffmanage",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("connected to MongoDB");
    }
});

app.use("/api/user", userRoute);
app.listen(3000, ()=>{
    console.log(`server running successfully on port : 3000`);
})
