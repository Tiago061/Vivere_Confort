import  express, { type Application, type Request, type Response } from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config()

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))    

app.get('/', (req: Request, res: Response) => {
        res.status(200).json({ 
            success: true,
            statusCode: '200', 
            body: "Welcome to Vivere Confort", 
            
  });
});


export default app;