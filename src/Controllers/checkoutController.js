import {db} from '../dbStrategy/mongo.js';
import UserValidate from '../middlewares/UserValidate.js';

export async function checkout(req, res){

    
}

export async function postCarrinho(req, res){

    const dadosCompra = req.body;

    try {
        
        await db.collection('compras').insertOne({ 
                                                    token: dadosCompra.token,
                                                    produto: dadosCompra.produto,
                                                    valor: dadosCompra.valor
        });

        res.sendStatus(201);
    }   

    catch {
        res.status(500).send('Não foi possível conectar ao servidor');
    }

}

export async function getCarrinho(req, res){

    const token = req.body.token;

    try {
    
        const arrayCompras = await db.collection('compras').find({token: token}).toArray();

        res.status(201).send(arrayCompras);
    }

    catch {
        res.status(500).send('Não foi possível conectar ao servidor');
    }
}