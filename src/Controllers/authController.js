import {db} from '../dbStrategy/mongo.js';
import { authCadastroSchema, authLoginSchema } from '../Schemas/authSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();



export async function login(req, res){

    try{
        const Usuario = req.body

        const UsuarioValido = authLoginSchema.validate(Usuario)
        if(UsuarioValido.error){
            return res.status(422).send("Preencha os campos corretamente")
        }
    
        const UsuarioExiste = await db.collection('usuarios').findOne({email:Usuario.email})
        if(!UsuarioExiste){
            return res.status(400).send('Usuario nao existe ')
        }
    
        const SenhaValida = bcrypt.compareSync(Usuario.senha,UsuarioExiste.senha)
        if(!SenhaValida){
            return res.status(422).send('Senha invalida')
        }

        const Sessao = await db.collection('sessoes').insertOne({idUsuario:UsuarioExiste._id})
        const { _id } = await db.collection("sessoes").findOne({idUsuario:UsuarioExiste._id})

        const dados = {idSessao:_id}
        const chaveJTW = process.env.JWT_SECRET 
        console.log(chaveJTW)
        const token =  jwt.sign(dados,chaveJTW)
        


    
        res.status(200).json({token})
    }
    catch(error){
        console.log(error)
        res.status(500).send('Erro ao logar')
    }
}

export async function cadastro(req, res){

    try {

        const novoUsuario = req.body;

        const dadosValidos = authCadastroSchema.validate(novoUsuario);

        if(dadosValidos.error) { 
            return res.status(422).send('Todos os campos são obrigatórios');
        }

        const senhaHash = bcrypt.hashSync(novoUsuario.senha, 10);

        await db.collection('usuarios').insertOne({
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            senha: senhaHash,
            cep: novoUsuario.cep,
            rua: novoUsuario.rua,
            bairro: novoUsuario.bairro,
            numero: novoUsuario.numero,
            cidade: novoUsuario.cidade,
            estado: novoUsuario.estado
        });

        res.status(200).send('Novo usuário cadastrado');

    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao cadastrar');

    }
}