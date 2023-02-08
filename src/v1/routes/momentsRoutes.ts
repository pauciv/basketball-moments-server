import { Router } from 'express' // usamos ES Modules, pero se compila en commonjs
import { createNewMoment, deleteOneMoment, getAllMoments, getOneMoment, updateOneMoment } from '../../controllers/momentsController'
import { checkJwt } from '../../middlewares/checkJwt'

const router = Router()

router
  .get('/', getAllMoments)
  .get('/:momentId', getOneMoment)
  .post('/', createNewMoment)
  .patch('/:momentId', updateOneMoment)
  .delete('/:momentId', deleteOneMoment)

export default router
