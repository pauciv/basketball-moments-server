import { Router } from 'express' // usamos ES Modules, pero se compila en commonjs
import { createNewUser, deleteOneUser, getAllUsers, getOneUser, updateOneUser } from '../../controllers/usersController'
import { checkJwt } from '../../middlewares/checkJwt'

const router = Router()

router
  .get('/', getAllUsers)
  .get('/:userId', getOneUser)
  .post('/', createNewUser)
  .patch('/:userId', updateOneUser)
  .delete('/:userId', deleteOneUser)

export default router
