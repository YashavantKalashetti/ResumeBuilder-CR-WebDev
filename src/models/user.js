const { error } = require("console");
const { randomBytes, createHmac} = require("crypto")
const mongoose = require("mongoose");

const {createTokenForUser} = require("../services/auth")

const userSchema = mongoose.Schema({
    fullName :{
        type : String,
        required:true,
    },
    email:{
        type : String,
        required:true,
        unique : true,
    },
    salt:{
        type : String,
    },
    password:{
        type : String,
        required : true,
    }
},
{timestamps : true} )


userSchema.pre("save",function (next){
    
    const user = this;

    if(!user.isModified("password")) return


    const salt = randomBytes(16).toString();

    try {
        const hashedPassword = createHmac('sha256',salt)
        .update(user.password)
        .digest("hex"); 

        this.salt = salt;
        this.password = hashedPassword;

        next();
    } catch (error) {
        console.log(error.message)
    }

    
})


const User = mongoose.model('Resume_user',userSchema);

module.exports = User;