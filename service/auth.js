import 'dotenv';
import jwt from 'jsonwebtoken';

const secrteKey = process.env.SECRET_KEY;

function setUserCookies (user) { 
    return jwt.sign(user, secrteKey);
}

function getUserCookies(token) { 
    if(!token){
        return
    }
    return jwt.verify(token, secrteKey);
}

module.exports = {setUserCookies, getUserCookies}; 
