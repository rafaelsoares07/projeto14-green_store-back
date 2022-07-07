import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv;'

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());