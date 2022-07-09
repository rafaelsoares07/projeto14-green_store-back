import {db, objectId} from "../dbStrategy/mongo.js"
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

async function UserValidate(req, res, next){
    const token = req.headers.authorization.replace("Bearer ","")
    const chaveJTW = process.env.JWT_SECRET

    const TokenValido = jwt.verify(token, chaveJTW)  

    const sectionExist = await db.collection('sessoes').findOne({_id:new objectId(TokenValido.idSessao)})

    res.locals.sectionExist = sectionExist
    
    next()
 
}

export default UserValidate