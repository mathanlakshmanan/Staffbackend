const userservice = require('../services/userService');


const register = async(req, res)=>{
    try{
        const user = await userservice.registerUser(req.body);
        res.json({data:user, status:"success", code:200});
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

const Login = async(req, res)=>{
    try{
        const user = await userservice.validateUser(req.body);
        res.json({data:user, status:"success", code:200});
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

const LoginView = async(req, res)=>{
    try{
        const allUser = await userservice.allusers();
        res.json({data:allUser, status:"success", code:200});
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

const updateRegister = async(req, res)=>{
    try{
        const user = await userservice.updateUser(req);
        res.json({data:user, status:"success", code:200});
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

const deleteRegister = async(req, res)=>{
    try{
        const user = await userservice.deleteUser(req.params.id);
        res.json({data:"Deleted Successfully", status:"success", code:200});
    }catch(e){
        res.status(500).json({error:err.message})
    }
}

module.exports = {register, Login, LoginView, updateRegister, deleteRegister}