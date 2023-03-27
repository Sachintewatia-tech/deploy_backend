const express = require("express");
const { UserModel } = require("../model/user.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
userRouter.post("/register",async(req,res)=>{
    const {email,password,age,location} = req.body;
    try {
        bcrypt.hash(password,5, async(err, hash)=> {
            const data = new UserModel({email,password:hash,location,age});
            await data.save();
            res.status(200).send("User has been registered")
        });
    } catch (error) {
        console.log(error);
        res.status(400).send("Error in registering");
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        console.log(user);
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    res.status(200).send({"msg":"Login Successfull","token":jwt.sign({"course":"backend"},"masai")})
                }else{
                    res.status(400).send({"msg":"Wrong credentials!"})
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Error"});
    }
})

userRouter.get("/details",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token,"bruce",(err,decoded)=>{
        decoded? res.status(200).send("user details"):res.status(400).send({"msg":"Error"})
    });
})

module.exports = {
    userRouter
}