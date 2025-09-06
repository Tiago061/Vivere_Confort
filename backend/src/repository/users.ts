import { prisma } from '../utils/prisma';



export default class UserRepository {
    async findAll() {
        return prisma.user.findMany()
    }

    async findById(id: number){
        return prisma.user.findUnique({ where: { id }})
    }
}