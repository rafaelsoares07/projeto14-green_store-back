import {db} from '../dbStrategy/mongo.js';
import UserValidate from '../middlewares/UserValidate.js';

export async function checkout(req, res){


    const idUser = res.locals.sectionExist.idUsuario
    const infosCompra = req.body

    await db.collection("Compras").insertOne({idUsuario:idUser, infosCompra})

    console.log(req.body)
    console.log(idUser)

    res.status(200).send('deu certo ')
    
}

export async function postCarrinho(req, res){

    const dadosCompra = req.body;

    try {

        const jaTemNoCarrinho = await db.collection('compras').findOne({ idProduto: dadosCompra.idProduto });

        if(jaTemNoCarrinho){
            await db.collection('compras').updateOne({
                                                        idProduto: dadosCompra.idProduto }, {
                                                        $inc: {
                                                            quantidade: 1
                                                        }
                                                    });
        }
        else { 
            await db.collection('compras').insertOne({ 
                token: dadosCompra.token,
                idProduto: dadosCompra.idProduto,
                urlImage: dadosCompra.urlImage,
                titulo: dadosCompra.titulo,
                valor: dadosCompra.valor,
                quantidade: 1
            });
        } 
    

        res.sendStatus(201);
    }   

    catch {
        res.status(500).send('Não foi possível conectar ao servidor');
    }

}

export async function getCarrinho(req, res){

    const token = req.headers.authorization?.replace("Bearer ","").trim();

    try {
    
        const arrayCompras = await db.collection('compras').find({token: token}).toArray();

        res.status(201).send(arrayCompras);
    }

    catch {
        res.status(500).send('Não foi possível conectar ao servidor');
    }
}