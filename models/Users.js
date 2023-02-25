const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    Email: {
        type:String,
        required:true,
        unique : true,
    },
    Password:{
        type:String,
        required:true
    },
    FullName:{
        type:String,
        required:true,
    },
    MobileNumber:{
        type:String,
        required:true,
    },
    DateOfBirth:{
        type: Date,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    Nationality:{
        type:String,
        required:true,
    },
    Languages:[{}],
    DoorNumber:{
        type:String,
        required:true,
    },
    StreetName:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
    State:{
        type:String,
        required:true,
    },
    Country:{
        type:String,
        required:true,
    },
    Pincode:{
        type:String,
        required:true,
    },
    DateOfJoining:{
        type:Date,
    },
    Position:{
        type:String,
    },
    TeamHeadName:{
        type:String,
    },
    Department:{
        type:String,
    },
    OfficialEmail:{
        type:String,
    },
    EmployeeCode:{
        type:String,
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Users", userSchema);

