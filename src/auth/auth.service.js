const User = require("../usuarios/User");
const jwt = require('jsonwebtoken');
const loginService = (email) => User.findOne({email: email}).select("+password");

const gerarToken = (userId) =>{
return    jwt.sign({id: userId}, process.env.SECRET, {expiresIn: 86400})
}

module.exports = {loginService, gerarToken};
