const { json } = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.json("Signup Endpoint CA_1")
})

app.use(express.json());

app.post("/signup",(req,res)=>{
    const {userName,email,password,dateOfBirth} = req.body;

    if(!userName){
        return res.status(400).json({error:"Username cannot be empty"});
    }
    if(!email){
        return res.status(400).json({error:"Email cannot be empty"});
    }
    if(password.length < 8){
        return res.status(400).json({error:"Password length should be greater than 8 or less than or equal 16"});
    }
    if(password.length >= 16){
        return res.status(400).json({error:"Password length should be greater than 8 or less than or equal 16"});
    }
    return res.status(200).json({
        Message : "Successfull",
        User : {userName},
        MailId : {email},
        DOB : {dateOfBirth},
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running in http://localhost:${PORT}`);
})