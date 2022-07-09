import db from "../dbStrategy/mongo.js"
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

async function UserValidate(req, res, next){
    const token = req.headers.authorization.replace("Bearer ","")
    const chaveJTW = process.env.JWT_SECRET

    console.log(chaveJTW)
    console.log(token)

    const TokenValido = jwt.verify(token, chaveJTW)  

    console.log(TokenValido)


    



    //const sessaoExiste = await db.collection('sessoes').findOne({_id:idSessao})

    next()
 
}

export default UserValidate