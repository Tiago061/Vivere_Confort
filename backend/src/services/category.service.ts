import { prisma } from '../utils/prisma';
import { CategoryDto } from '../dtos/category.dto';
export class CategoryService {

    async getCategories() {
       return await prisma.category.findMany()
   }
   
    async getCategoryById(id: string) { 
        return await prisma.category.findUnique({   
              where: { id  },
              include: { products: true } // Inclui os produtos relacionados à categoria
        });
    }

    async createCategory(data: CategoryDto){

        return await prisma.category.create({
            data: {
                name: data.name,
            }
        })
    }

    async deleteCategory(id: string) {
       return await prisma.category.delete({
            where: { id }
        })
    }

    async updateCategory(id: string, data: CategoryDto){

        return await prisma.category.update({
            where: { id },
            data: {
                 name: data.name,
            }
        })
    }
}