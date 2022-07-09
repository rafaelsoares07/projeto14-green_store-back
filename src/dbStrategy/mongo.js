import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db = null;

const mongoClient = new MongoClient(process.env.MONGO_URL_CONECTION);

try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.MONGO_DATABASE);
    console.log('Conectado com o banco: ' + process.env.MONGO_DATABASE);
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados');
  }

const objectId = ObjectId;

export {db , objectId}