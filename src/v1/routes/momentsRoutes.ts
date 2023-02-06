import express from 'express' // usamos ES Modules, pero se compila en commonjs
// import * as momentsController from '../../controllers/momentsController'
import * as momentsServices from '../../services/momentsServices'

const router = express.Router()

router
// .get('/', momentsController.getAllMoments)
// .get('/:momentId', momentsController.getOneMoment)
// .post('/', momentsController.createNewMoment)

  .get('/', (_req, res) => {
    res.send(momentsServices.getAllMoments())
  })
  .get('/:momentId', (req, res) => {
    const entry = momentsServices.getOneMoment(+req.params.momentId)

    return (entry != null)
      ? res.send(entry)
      : res.sendStatus(404)
  })
  .post('/', (req, res) => {
    // try {
    //   const newDiaryEntry = toNewDiaryEntry(req.body)

    //   const addedDiaryEntry = momentsServices.createNewMoment(newDiaryEntry)

    //   res.send(addedDiaryEntry)
    // } catch (err) {
    //   res.status(400).send(err.message)
    // }
  })

export default router
