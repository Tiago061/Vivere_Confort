import { UsersController } from '../controllers/users.controller'
import { Router } from 'express'
import { authenticateToken } from '../middlewares/auth.middleware'


const router = Router()
const usersController = new UsersController()

router.use(authenticateToken);

router.get('/', (req, res) => usersController.getUsers(req, res))
router.get('/:id', (req, res) => usersController.getUserById(req, res))
router.post('/', (req, res) => usersController.userCreate(req, res))
router.put('/:id', (req, res) => usersController.updateUser(req, res))
router.delete('/:id', (req, res) => usersController.deleteUser(req, res))
router.get('/:id/addresses', (req, res) => usersController.getUserAddress(req, res)) //Rota para buscar endereços de um usuário específico

export default router