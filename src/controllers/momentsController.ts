import { Request, Response } from 'express'
import { getMoments, getMoment, createMoment, updateMoment, deleteMoment } from '../services/momentsServices'
import { handleError } from '../utils/errorHandle'

const getAllMoments = async (_req: Request, res: Response): Promise<any> => {
  try {
    const allMoments = await getMoments()
    res.send(allMoments)
  } catch (err) {
    handleError(res, 'getAllMoments error')
  }
}

const getOneMoment = async (req: Request, res: Response): Promise<any> => {
  try {
    const oneMoment = await getMoment(req.params.momentId)
    res.send(oneMoment)
  } catch (err) {
    handleError(res, 'getOneMoment error')
  }
}

const createNewMoment = async (req: Request, res: Response): Promise<any> => {
  try {
    const newMoment = await createMoment(req.body)
    res.send(newMoment)
  } catch (err) {
    handleError(res, 'createNewMoment error')
  }
}

const updateOneMoment = async (req: Request, res: Response): Promise<any> => {
  try {
    const { params: { momentId }, body } = req
    const response = await updateMoment(momentId, body)
    res.send(response)
  } catch (err) {
    handleError(res, 'updateOneMoment error')
  }
}

const deleteOneMoment = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await deleteMoment(req.params.momentId)
    res.send(response)
  } catch (err) {
    handleError(res, 'deleteOneMoment error')
  }
}

export { getAllMoments, getOneMoment, createNewMoment, updateOneMoment, deleteOneMoment }
