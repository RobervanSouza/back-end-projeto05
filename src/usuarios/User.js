const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
   
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  cpf: {
    type: String,
    required: true,
    
  },
  isAdmin: {
    type: String,
    required: true,
   
  },
  imageUrl: {
    type: String,
    required: true,
    
  },
});

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next();
});



const User = mongoose.model('usuarios', UserSchema);

module.exports = User;


/* 

const loginController = async(req, res) =>{
   const { email, password} = req.boby;
   const user = await authService.loginService(email);

   res.send(user);
}

*/
