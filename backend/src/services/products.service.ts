import { ProductDto } from '../dtos/product.dto';
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
                name: data.nameProduct,
                price: data.price,
                description: data.description,
                stock_quantity: data.stock_quantity,
            }
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
                 name: data.nameProduct,
                price: data.price,
                description: data.description,
                stock_quantity: data.stock_quantity,
            }
        })
    }

}
