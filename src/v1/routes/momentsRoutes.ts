import { Router } from 'express' // usamos ES Modules, pero se compila en commonjs
// import * as momentsController from '../../controllers/momentsController'
import { createNewMoment, getAllMoments, getOneMoment } from '../../controllers/momentsController'

const router = Router()

router
  .get('/', getAllMoments)
  .get('/:momentId', getOneMoment)
  .post('/', createNewMoment)

// .get('/', getAllMoments)
// .get('/:momentId', (req, res) => {
//   const entry = momentsController.getOneMoment(+req.params.momentId)

//   return (entry != null)
//     ? res.send(entry)
//     : res.sendStatus(404)
// })
// .post('/', (req, res) => {
//   // try {
//   //   const newDiaryEntry = toNewDiaryEntry(req.body)

//   //   const addedDiaryEntry = momentsServices.createNewMoment(newDiaryEntry)

//   //   res.send(addedDiaryEntry)
//   // } catch (err) {
//   //   res.status(400).send(err.message)
//   // }
// })

export default router