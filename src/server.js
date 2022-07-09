import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './Routes/authRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import checkoutRoutes from './Routes/checkoutRoutes.js';

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

app.use(authRoutes);
app.use(productRoutes);
app.use(checkoutRoutes);

app.listen(process.env.PORT,()=>{
    console.log('servidor rodando')
});
