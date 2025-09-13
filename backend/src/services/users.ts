import { CreateUserDto } from '../dtos/user.dto'
import { prisma } from '../utils/prisma';

export class UsersService {

     async getUsers() {
        return await prisma.user.findMany()
    }

    async getUserById(id: string) {
         return await prisma.user.findUnique({
            where: { id  }
        })
    }

    async createUser(data: CreateUserDto){

        return await prisma.user.create({
            data: {
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                age: data.age,
                cpf: data.cpf,
                ...(data.addresses?.length && {
                    addresses: {
                        create: data.addresses.map(addr => ({
                        street: addr.street,
                        number: addr.number,
                        city: addr.city,
                        neighborhood: addr.neighborhood,
                        state: addr.state,
                        zipCode: addr.zipCode, // ou cep se for o campo do Prisma
                        country: addr.country,
                      })),
                    },
                }),
            },
            include: { addresses: true}
        })
    }

    async deleteUser(id: string) {
       return await prisma.user.delete({
            where: { id }
        })
        
    }

    async updateUser(id: string, data: {firstname: string, lastname: string, age: number, email: string, cpf: string}){

        return await prisma.user.update({
            where: { id },
            data: {
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                age: data.age,
                cpf: data.cpf,
            }
        })
    }

}
