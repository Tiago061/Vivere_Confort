import app from './app';
import prisma from './config/database';


const PORT = 3000

async function server(){

    try{
        // Testar conexao com o banco
        await prisma.$connect()
        console.log('Connected to database')

        // Iniciar servidor
        app.listen(PORT, () => {
             console.log(`Server us running on port ${PORT}`)
        })
    }catch(error){
        console.error('Failed to start server:', error)
        process.exit(1)
    }
}

server()



