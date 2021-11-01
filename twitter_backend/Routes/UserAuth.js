const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const User = require('../Model/User/userSchema') //database values..
// SIGN UP ROUTE
router.post('/register', async (req,res)=>{
    const {username, password, vpassword, profilePic} = req.body
    if (!username|| !password|| !profilePic || !vpassword){
        return res.status(500).json({error: "fill all fields"})
    }
try{
   const userexist = await User.findOne({username:username})
   if (userexist){
        return res.status(502).json({error: "username already exists"})
   }
   else if(password!=vpassword){
        return res.status(503).json({error: "passwords should match"})
   }
   else{
        const user = new User({username, password, vpassword, profilePic})
        //BCRYPT..
        const userRegistered = await user.save() // save in mongoDB collection
        if(userRegistered){
            res.status(201).json({message: "user registeered success"})
        }else{
            res.status(504).json({error: "soemthign went wrog"})
        }
}
}
catch(err){
console.log(err, "this error")
res.status(505).json({error: "worng.."})
}
})
//LOGIN ROUTE and check with one in database
router.post('/login', async (req,res)=>{
    let token
    try{
        const{username, password} = req.body
        if(!username || !password){
            return res.status(400).json({error:"fill all details"})
        }
        // finding if username (user) exists in database
        const userLogin = await User.findOne({username:username})
        //userLogin gets the entire object
        if(userLogin){
            const isSame = await bcrypt.compare(password, userLogin.password)
            token = await userLogin.generateAuthToken();  
            //storing in cookie
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
        if(isSame){
            res.json({message: "user signin successful"})
        }else{
            res.status(400).json({error: "invalid password"})
        }
        }
        else{
            res.json({message: "user does not exist"})
        }
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router