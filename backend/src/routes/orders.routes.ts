
import { OrderController } from "../controllers/order.controller"
import { Router } from "express"

const router = Router()
const ordersController = new OrderController()

router.get('/', (req, res) => ordersController.findAll(req, res))
router.get('/:id', (req, res) => ordersController.findById(req, res))
router.post('/', (req, res) => ordersController.createOrder(req, res))
router.put('/:id', (req, res) => ordersController.updateStatus(req, res))
router.delete('/:id', (req, res) => ordersController.deleteOrder(req, res))


export default router
