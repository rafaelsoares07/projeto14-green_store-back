import joi from 'joi';

export const authCadastroSchema = joi.object({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    senha: joi.string().required(),
    senhaConfirma: joi.ref('senha'),
    cep: joi.string().required(),
    rua: joi.string().required(),
    bairro: joi.string().required(),
    numero: joi.number().required(),
    cidade: joi.string().required(),
    estado: joi.string().required()
})

export const authLoginSchema = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().required()
})