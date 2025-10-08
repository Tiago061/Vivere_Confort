import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController {
    private categoryService: CategoryService

    constructor(){
        this.categoryService = new CategoryService()
    }

    async getCategories(_req: Request, res: Response){
            try{
                const categories = await this.categoryService.getCategories()
                res.json(categories)
            }catch (error) {
                console.error(error);
               res.status(500).json({ error: 'Internal Server error'})
           }
    }

    async getCategoryById(req: Request<{ id: string}>, res: Response){
         try{
            const { id } = req.params
            const category = await this.categoryService.getCategoryById(id)
            res.json(category)
        }catch (error) {
            res.status(500).json({ error: 'Internal Server error'})
        }   
    }

    async createCategory(req: Request, res: Response){
         try{
            const newCategory = await this.categoryService.createCategory(req.body)
            res.json(newCategory)
        }catch (error) {
             console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
        }   
    }

    async updateCategory(req: Request<{ id: string}>, res: Response){
         try{
            const { id } = req.params
            const { name  } = req.body
             if (!name) {
                return res.status(400).json({ error: 'Name is required' });
            }

            const newCategory = await this.categoryService.updateCategory(id, { name })
            res.json(newCategory)
        }catch (error) {
             console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
        }   
    }

    async deleteCategory(req: Request<{ id: string}>, res: Response){
         try{
            const { id } = req.params
            const category = await this.categoryService.deleteCategory(id)
            res.json(category)
        }catch (error) {
             console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
        }
    }

    
}