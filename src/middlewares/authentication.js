require("dotenv").config()

const { validateToken } = require("../services/auth")

function checkForAuthenticationCookie (req,res,next){
    const verifyToken = req.cookies[process.env.WEB_TOKEN];
    if(!verifyToken){
        return res.status(401).redirect('/user/signin')
    }

    try{
        const userPayload = validateToken(verifyToken);
        // attaching it to user to use it later in the website to fetch name, email etc...
        req.user = userPayload;
    }catch(error){
        return res.status(401).redirect('/user/signin')
    }
    
    return next();
    
}

module.exports = checkForAuthenticationCookie ;
