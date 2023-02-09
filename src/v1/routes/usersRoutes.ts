import { Router } from 'express'
import { createNewUser, deleteOneUser, getAllUsers, getOneUser, updateOneUser } from '../../controllers/usersController'

const router = Router()

router
  .get('/', getAllUsers)
  .get('/:userId', getOneUser)
  .post('/', createNewUser)
  .patch('/:userId', updateOneUser)
  .delete('/:userId', deleteOneUser)

export default router
