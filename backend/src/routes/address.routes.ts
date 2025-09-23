import { AddressController } from "../controllers/address.controller"
import { Router } from "express"

const router = Router()
const addressController = new AddressController()

router.get('/', (req, res) => addressController.getAddress(req, res))
router.get('/:id', (req, res) => addressController.getAddressId(req, res))
router.post('/', (req, res) => addressController.createAddress(req, res))
router.put('/:id', (req, res) => addressController.updateAddress(req, res))
router.delete('/:id', (req, res) => addressController.deleteAddress(req, res))
