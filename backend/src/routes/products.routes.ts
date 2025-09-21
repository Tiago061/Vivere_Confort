import { ProductsController } from "../controllers/products.controller"
import { Router } from "express"

const router = Router()
const productsController = new ProductsController()


router.get('/', (req, res) => productsController.getProducts(req, res))
router.get('/:id', (req, res) => productsController.getProductById(req, res))
router.post('/', (req, res) => productsController.createProduct(req, res))
router.put('/:id', (req, res) => productsController.updateProduct(req, res))
router.delete('/:id', (req, res) => productsController.deleteProduct(req, res))