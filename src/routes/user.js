
require("dotenv").config();

const express = require("express");
const User = require("../models/user")
const { createHmac } = require("crypto")
const {createTokenForUser} = require("../services/auth")

const router = express.Router();

router.get('/signin',(req,res)=>{
    return res.render('signin')
});

router.post('/signin',async (req,res)=>{
    const { email, password } = req.body;

    const user = await User.findOne({email})

    if(!user) {
        return res.render('signin', {emailError : "Inncorrect Email"})
    }

    const salt = user.salt
    const hashedPassword = user.password

    // Hashing the user entered password
    const userProvidedHash = createHmac("sha256",salt)
    .update(password)
    .digest("hex");

    if(hashedPassword !== userProvidedHash) {
        return res.render('signin', {passwordError : "Inncorrect password"})
    }

    const token = createTokenForUser(user)

    try{
        // redirecting to home page in case of correct details
        res.cookie(process.env.WEB_TOKEN,token,{httpOnly:true}).redirect('/')
    }catch {    
        console.log("Server Error Failed to create token -------------");
        return res.render('/login', {serverError : "Server Error"})
    }
    
});

router.get('/signup',(req,res)=>{
    return res.render('signup')
});

router.get('/logout',(req,res)=>{
    // console.log("Logout")
    res.clearCookie(process.env.WEB_TOKEN).redirect("/user/signin")
})

router.post('/signup',async (req,res)=>{
    const { fullName, email, password } = req.body;
    // console.log("A new user created")

    const userExists = await User.findOne({email})

    if(userExists){
        return res.render("signup",{
            accountExists : "User with this email already exists"
        })
    }

    await User.create({
        fullName,
        email,
        password
    });
    
    return res.status(201).redirect("/user/signin");
});

// In case of wrong url
router.use((req,res)=>{
    return res.status(404).render("error_404")
})

module.exports = router;
