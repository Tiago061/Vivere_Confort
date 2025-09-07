import { prisma } from '../utils/prisma';

export default class UsersController {

     async getUsers() {
        const users = await prisma.user.findMany()
        return users
    }

    async getUserById(id: string) {
        const user = await prisma.user.findUnique({
            where: { id  }
        })

        return user
    }

    async createUser(data: {firstname: string, lastname: string, age: number, email: string, cpf: string, }){

        const user = await prisma.user.create({
            data: {
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                age: data.age,
                cpf: data.cpf
            }
        })
        return user
    }
}