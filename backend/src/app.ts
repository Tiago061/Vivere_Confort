import  express, { type Application, type Request, type Response } from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { prisma } from './utils/prisma';

config()

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))    

app.get('/', async (req: Request, res: Response) => {
        
        res.status(200).json({ 
            success: true,
            statusCode: '200', 
            body: "Welcome to Vivere Confort", 
  });
});


export default app;