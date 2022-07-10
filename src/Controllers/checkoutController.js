import {db} from '../dbStrategy/mongo.js';
import UserValidate from '../middlewares/UserValidate.js';

export async function checkout(req, res){

    
}

export async function postCarrinho(req, res){

    const dadosCompra = req.body;

    try {
        
        await db.collections('compras').insertOne({dadosCompra});

        res.sendStatus(201);
    }   

    catch {
        res.status(500).send('Não foi possível conectar ao servidor');
    }

}

export async function getCarrinho(req, res){

    const { sectionExist } = res.locals;

    try {
        const arrayCompras = await db.collections('compras').find({token: sectionExist.token}).toArray();

        res.status(201).send(arrayCompras);
    }

    catch {
        res.status(500).send('Não foi possível conectar ao servidor');
    }
}