import { prisma } from '../utils/prisma';

export default class UsersService{
    async getUsers() {
        const users = await prisma.user.findMany()
        return users
    }
}