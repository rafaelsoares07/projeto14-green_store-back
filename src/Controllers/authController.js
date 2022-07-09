import db from '../dbStrategy/mongo.js';
import { authCadastroSchema } from '../Schemas/authSchema.js';
import bcrypt from 'bcrypt';

export async function login(req, res){
    const userLogin = req.body


    

    res.status(200).send("Logou com sucesso")

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