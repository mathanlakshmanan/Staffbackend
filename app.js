const express = require('express');
const userRoute = require('./routes/userRoute');
const app = express();
const mongoose = require('mongoose');

require("dotenv").config(); 
var cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://mathankumar:Mathanlakma5@cluster0.gdlv0c3.mongodb.net/staffmanage",
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
app.listen(process.env.PORT, ()=>{
    console.log(`server running successfully on port : ${process.env.PORT}`);
})
