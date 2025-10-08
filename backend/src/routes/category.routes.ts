import { CategoryController } from "../controllers/category.controller"
import { Router } from "express"

const router = Router()
const categoryController = new CategoryController()

router.get('/', (req, res) => categoryController.getCategories(req, res))
router.get('/:id', (req, res) => categoryController.getCategoryById(req, res))
router.post('/', (req, res) => categoryController.createCategory(req, res))
router.put('/:id', (req, res) => categoryController.updateCategory(req, res))
router.delete('/:id', (req, res) => categoryController.deleteCategory(req, res))

export default router