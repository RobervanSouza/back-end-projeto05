const authService = require("./auth.service")
const bcrypt = require("bcryptjs")


const loginController = async(req, res) =>{
   const { email, password} = req.body;
   const user1 = await authService.loginService(email);

   if (!user1){
    return res.status(401).send({ message: "usuario não encontrado"})
   }

   const isPasswordValid = await bcrypt.compare(password, user1.password);
   if (!isPasswordValid){
    return res.status(401).send({ message: "password incorrect"})
   }
   
   res.send(user1);
}

module.exports = {loginController}
/* 

const loginController = async(req, res) =>{
   const { email, password} = req.boby;
   const user = await authService.loginService(email);

   res.send(user);
}

*/
