require("dotenv").config();
const authService = require("./auth.service")
const bcrypt = require("bcryptjs")


const loginController = async(req, res) =>{
   const { email, password} = req.body;
   const user = await authService.loginService(email);

   if (!user){
    return res.status(401).send({ message: "usuario não encontrado"})
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);
   if (!isPasswordValid){
    return res.status(401).send({ message: "password incorrect"})
   }
 const token = authService.gerarToken(user.id)
   res.send({token});
}

module.exports = {loginController}
/* 

const loginController = async(req, res) =>{
   const { email, password} = req.boby;
   const user = await authService.loginService(email);

   res.send(user);
}

*/
