const Users = require('../models/Users');

const validateUser = async(data)=>{
    return await Users.find({Email:data.email, Password:data.password});
}

const allusers = async()=>{
    return await Users.find({});
}

const registerUser = async(data)=>{
    const users = new Users({
		Email: data.Email,
		Password: data.Password,
        FullName:data.FullName,
        MobileNumber:data.MobileNumber,
        DateOfBirth:data.DateOfBirth,
        Gender:data.Gender,
        Nationality:data.Nationality,
        DoorNumber:data.DoorNumber,
        StreetName:data.StreetName,
        City:data.City,
        State:data.State,
        Country:data.Country,
        Pincode:data.Pincode,
        Languages:data.Languages,
	})
    return await users.save();
}

const updateUser = async(data)=>{
    const uservalue = data.body;
    const userid = data.params.id; 
    return await Users.findByIdAndUpdate({_id:userid},uservalue);
}
const deleteUser = async(data)=>{
    console.log("data", data);
    return await Users.findByIdAndDelete(data);
}

module.exports = {
    validateUser,
    allusers,
    registerUser,
    updateUser,
    deleteUser
}