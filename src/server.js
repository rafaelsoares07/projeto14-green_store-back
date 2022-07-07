import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());


//rota de teste

app.get("/ola", (req, res)=>{
    
    res.status(222).send('FUNFOU')
})



const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("servidor rodando")
})