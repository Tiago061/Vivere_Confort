import  express, { type Application, type Request, type Response } from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config()

async function main(){

    //Cria um aplicativo
    const app: Application = express()

    const port = 3000

    //servidor entenda requisições que enviam informações no formato JSON
    app.use(express.json())
    //permite que o servidor aceite requisições de diferentes origens.
    app.use(cors())

    app.get('/',(req:Request, res:Response) => {
        res.send({
            success: true,
            statusCode:200,
            body:'Welcome to Vivere Confort '
        })
    })

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
}

main()


