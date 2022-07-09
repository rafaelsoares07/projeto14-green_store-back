import db from '../dbStrategy/mongo.js';


export async function cadastrarProdutos(req, res){
    const novosProdutos = req.body
    await db.collection("produtos").insertMany(novosProdutos)
    res.status(200).send('Cadastro de produtos feito com sucesso')
}

export async function cadastrarProduto(req, res){
    const novoProduto = req.body
    await db.collection("produtos").insertOne(novoProduto)
    res.status(200).send('Cadastro de produto feito com sucesso')
}

export async function produtos(req, res){
    const produtos = await db.collection("produtos").find({}).toArray()
    res.status(200).send(produtos)
    
}



