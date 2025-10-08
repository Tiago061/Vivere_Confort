import  express, { type Application, type Request, type Response } from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import usersRoutes from './routes/users.routes'
import productsRoutes from './routes/products.routes'
import addressRoutes from './routes/address.routes'
import categoryRoutes from './routes/category.routes'
config()

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))    


app.use('/users', usersRoutes)
app.use('/products', productsRoutes)
app.use('/addresses', addressRoutes)
app.use('/categories', categoryRoutes)

app.get('/', async (_req: Request, res: Response) => {
        
        res.status(200).json({ 
            success: true,
            statusCode: '200', 
            body: "Welcome to Vivere Confort", 
  });
});


export default app;