import { ProductsService } from "../services/products.service";
import {Request, Response } from 'express'

export class ProductsController {
    private productsService: ProductsService;

    constructor() {
        this.productsService = new ProductsService();
    }

    async getProducts (_req: Request, res: Response) {
        try{
            const products = await this.productsService.getProducts()
            return res.json(products)
        }catch (error) {
            return res.status(500).json({ error: 'Internal Server error'})
        }
    }

    async getProductById(req: Request<{ id: string}>, res: Response) {
        try {
            const { id }= req.params;
            const product = await this.productsService.getProductById(id)
            return res.json(product)
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server error'})
        }
    }

    async createProduct(req: Request, res: Response) {
        try{
            const newProduct = await this.productsService.createProduct(req.body)
            return res.status(201).json(newProduct)
        }catch(error){   
          return res.status(500).json({ error: 'Internal Server error'})
        }
    }
    
    async updateProduct(req: Request<{ id: string}>, res: Response) {
        try{
            const { id } = req.params
            const updateProduct = await this.productsService.updateProduct(id , req.body)
            return res.json(updateProduct)
        }catch(error){
            return res.status(500).json({ error: 'Internal Server error'})
        }
    }

    async deleteProduct(req: Request<{ id: string}>, res: Response){
        try{
            const { id } = req.params
            const deleteProduct = await this.productsService.deleteProduct(id)
           return res.json(deleteProduct)
        }catch(error){
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}