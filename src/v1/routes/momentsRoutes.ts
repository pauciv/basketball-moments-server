import { Router } from 'express'
import { createNewMoment, deleteOneMoment, getAllMoments, getOneMoment, updateOneMoment } from '../../controllers/momentsController'

const router = Router()

router
  .get('/', getAllMoments)
  .get('/:momentId', getOneMoment)
  .post('/', createNewMoment)
  .patch('/:momentId', updateOneMoment)
  .delete('/:momentId', deleteOneMoment)

export default router
