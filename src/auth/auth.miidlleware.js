
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { findByIdUserService } = require("../usuarios/users.service");
 


module.exports = (req, res, next ) =>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(401).send({ message: "o tokem não goi informado"});      
    }
    const parts = authHeader.split("");


    if(parts.length!== 2){
        return res.status(401).send({ message: "o tokem invalido"});
    }

    const [schema, token] = parts;

    if(!/^Bearer^/i.test(schema)){
return res.status(401).send({ message: 'o tokem invalido' });
    }

jwt.verify(token, process.env.SECRET, async(err, decoded) =>{
    const user = await findByIdUserService(decoded.id)

    if(err || !user || !user.id){
        return res.status(401).send({ message: 'o tokem invalido'});
    }
    req.userId = user.id
    return next ();
})


}

