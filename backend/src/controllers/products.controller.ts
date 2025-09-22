import { ProductsService } from "../services/products.service";
import {Request, Response } from 'express'

export class ProductsController {
    private productsService: ProductsService;

    constructor() {
        this.productsService = new ProductsService();
    }

    async getProducts (req: Request, res: Response) {
        try{
            const products = await this.productsService.getProducts()
            res.json(products)
        }catch (error) {
             console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
        }
    }

    async getProductById(req: Request<{ id: string}>, res: Response) {
        try {
            const { id }= req.params;
            const product = await this.productsService.getProductById(id)
            res.json(product)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
        }
    }

    async createProduct(req: Request, res: Response) {
        try{
            const newProduct = await this.productsService.createProduct(req.body)
            res.status(201).json(newProduct)
        }catch(error){
            console.error(error)
            res.status(500).json({ error: 'Internal Server error'})
        }
    }
    
    async updateProduct(req: Request<{ id: string}>, res: Response) {
        try{
            const { id } = req.params
            const updateProduct = await this.productsService.updateProduct(id , req.body)
            res.json(updateProduct)
        }catch(error){
            console.error(error)
            res.status(500).json({ error: 'Internal Server error'})
        }
    }

    async deleteProduct(req: Request<{ id: string}>, res: Response){
        try{
            const { id } = req.params
            const deleteProduct = await this.productsService.deleteProduct(id)
            res.json(deleteProduct)
        }catch(error){
            console.error(error)
        }
    }
}