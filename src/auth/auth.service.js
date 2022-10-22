const User = require("../usuarios/User");

const loginService = (email) => User.findOne({email: email}).select("+password");

module.exports = {loginService};
