require("dotenv").config();

const PORT = process.env.PORT;

const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const checkForAuthenticationCookie = require("./middlewares/authentication")
const userRoute = require("./routes/user")

const app = express();

mongoose
    .connect(process.env.MONGO_URL)
    .then((e)=> console.log("Connected to mongoDb Sucessfully."))
    .catch((e)=> console.log(e.message))

app.set("view engine","ejs");
app.set("views",path.resolve('./views'));

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.resolve("./public")));
app.use(cookieParser());

app.use("/user",userRoute)

app.use(checkForAuthenticationCookie)

app.get("/",(req,res)=>{
    return res.status(200).render("index",{
        user : req.user,
    })
})

app.use((req,res)=>{
    return res.status(404).render("error_404");
})

app.listen(PORT,()=>{
    console.log(`Server Started at PORT : ${PORT}`)
})