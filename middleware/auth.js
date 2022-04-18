const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const user = require("../model/user");

const auth = async(req, res, next) => {
    const token = req.headers.authorization;

    try {
        //verify token
        const decoded = jwt.verify(token, secret);
        const userr = await user.findById(decoded.id);
        if(!userr) {
            res.status(404).json({msg:"not authorized"})
        }else {
            req.user = user;
            next();
        }
    } catch (error) { 
        res.status(502).json({msg:error.message});
    }
};

module.exports = auth;