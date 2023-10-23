require("dotenv").config();

const jwt  = require("jsonwebtoken")

function createTokenForUser(user){

    const payload = {
        _id : user._id,
        email : user.email,
        fullName : user.fullName
    }

    const token = jwt.sign(payload , process.env.SecretKeyForCookieToken)
    return token;
}

function validateToken(token){
    return jwt.verify(token, process.env.SecretKeyForCookieToken)
}

module.exports = {
    createTokenForUser,
    validateToken
}