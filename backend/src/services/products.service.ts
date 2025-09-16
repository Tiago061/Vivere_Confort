
import { prisma } from '../utils/prisma';

export class ProductsService {

     async getProducts() {
        return await prisma.product.findMany()
    }

    async getProductById(id: string) {
         return await prisma.product.findUnique({
            where: { id  }
        })
    }

    async createProduct(data: ProductDto){

        return await prisma.product.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
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

    async deleteProduct(id: string) {
       return await prisma.product.delete({
            where: { id }
        })
        
    }

    async updateProduct(id: string, data: ProductDto){

        return await prisma.product.update({
            where: { id },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                age: data.age,
                cpf: data.cpf,
            }
        })
    }

}
